class ticTacToe {
    polaGry;

    czyAktywna;

    aktywnyTryb = null;

    aktywnyGracz = 'X';

    tablicaWynikow = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ]; // Wszystkie możliwe kombinacje wygranych :)

    constructor() {
      this.board = new planszaGry(this.wyborPola, this.ustawieniaDomyslne, this.zmienTryb, this.zmianaZnaku);
      this.ustawieniaDomyslne();
    }

    walidacja = () => {
      let czyWygrana = false;

      for (const element of this.tablicaWynikow) {
        const [element0, element1, element2] = element;

        const wypelniona1 = this.polaGry[element0];
        const wypelniona2 = this.polaGry[element1];
        const wypelniona3 = this.polaGry[element2];

        if (wypelniona1 !== '' && wypelniona2 !== '' && wypelniona3 !== '') {
          if (wypelniona1 === wypelniona2 && wypelniona2 === wypelniona3
                    && wypelniona3 === wypelniona1) {
            czyWygrana = true;
            break;
          }
        }
      } // Sprawdzanie czy udało się któremuś z graczy wygrać

      if (czyWygrana) {
        this.czyAktywna = false;
        this.board.komunikatWygrana(this.aktywnyGracz);
      } else if (this.tablicaUzupelniona()) {
        this.czyAktywna = false;
        this.board.komunikatRmis();
      }
    };

    zmienTryb = (event) => {
      this.aktywnyTryb = this.getNazwaKlasy(event.target.value);
      this.board.restartGry();
    };

    zmianaZnaku = (event) => {
      this.aktywnyGracz = event.target.value;
      this.board.restartGry();
    };

    wyborPola = (event) => {
      const { position } = event.target.dataset;

      if (this.czyAktywna && this.polaGry[position] === '') {
        this.ruchGracza(position);
        if (this.aktywnyTryb !== null && this.czyAktywna) {
          this.ruchGracza(this.aktywnyTryb.ruchKomputera(this.polaGry, this.aktywnyGracz));
        }
        if (this.czyAktywna && this.aktywnyTryb === null) this.board.panel.innerHTML = `Ruch Gracza <span class="gracz">${this.aktywnyGracz}</span>`;
      }
    };

    ruchGracza = (pozycja) => {
      this.polaGry[pozycja] = this.aktywnyGracz;
      this.board.getPozycje(pozycja).classList.add(`board__item--filled-${this.aktywnyGracz}`);
      this.walidacja();
      this.aktywnyGracz = this.aktywnyGracz === 'X' ? 'O' : 'X';
    }

    ustawieniaDomyslne = (wybranyZnak) => {
      this.polaGry = ['', '', '', '', '', '', '', '', ''];
      this.czyAktywna = true;
      if (this.aktywnyTryb === null) this.board.panel.innerHTML = `Ruch Gracza <span class="gracz">${this.aktywnyGracz}</span>`;
    }

    tablicaUzupelniona = () => {
      let pustePole = 0;
      this.polaGry.forEach((field) => {
        if (field === '') {
          pustePole++;
        }
      });
      return (pustePole === 0);
    }

    getNazwaKlasy = (name) => {
      if (name === 'easy') {
        return new trybAI();
      }
      return null;
    }
}

class planszaGry {
    elementyPola = document.querySelectorAll('.board__item'); 
    panel = document.querySelector('.panel');
    resetButton = document.querySelector('.reset-button');
    wyborTrybuGry = document.querySelector('#mode-select');
    wyborZnaku = document.querySelector('#char-select');
    ukryteMenu = document.querySelector('.select_hidden');
    ukryj = document.querySelector('.hideButton');

    constructor(wyborPola, przyciskRestart, zmianaTrybu, zmianaZnaku) {
      this.przyciskRestart = przyciskRestart;
      this.resetButton.addEventListener('click', this.restartGry);
      this.elementyPola.forEach((pole) => {
        pole.addEventListener('click', wyborPola);
      });
      this.wyborTrybuGry.addEventListener('change', zmianaTrybu);
      this.wyborZnaku.addEventListener('change', zmianaZnaku);
      this.ukryj.addEventListener('click', this.ukryjMenu);
    } 

    ukryjMenu = () => {
      if (!this.ukryteMenu.classList.contains('select')) {
        this.ukryteMenu.classList.add('select');
      } else {
        this.ukryteMenu.classList.remove('select');
      }
    }

    restartGry = () => {
      this.resestPlanszy();
      this.przyciskRestart();
    }

    resestPlanszy = () => {
      this.elementyPola.forEach((pole) => {
        pole.classList.remove('board__item--filled-X', 'board__item--filled-O');
      });
      this.panel.innerText = '';
    };

    komunikatWygrana = (aktywnyGracz) => {
      this.panel.innerText = `Gratulacje ${aktywnyGracz}, Wygrałeś!`;
    };

    komunikatRmis = () => {
      this.panel.innerText = 'Remis!';
    };

    getPozycje = (pozycja) => this.elementyPola[pozycja];
}

const game = new ticTacToe();

class trybAI {
    ruchKomputera = (pola, gracz) => {
      const wolnePola = Object.entries(pola)
        .filter((pole) => pole[1] === '')
        .map((pole) => pole[0]);

      const losowePozycje = Math.floor(Math.random() * wolnePola.length);
      return wolnePola[losowePozycje];
    };
}
