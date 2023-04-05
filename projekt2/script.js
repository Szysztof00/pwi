var pages = {
            'home': `
<h1>Strona Główna</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus, magna sit amet euismod vestibulum, quam diam aliquam erat, quis consectetur enim nunc id dolor. Praesent ac lacinia neque. Sed mattis dolor sed massa mattis, sed commodo nisl pulvinar.<br><br> Duis aliquet magna ut congue sollicitudin. Sed mi neque, suscipit a interdum non, hendrerit quis mi. Morbi maximus tempor pretium. Etiam non viverra massa, ut imperdiet purus. Phasellus eget libero quis orci scelerisque elementum et eu mi.
                <img src="zdjecie.png" alt="zdjecie" style="float:left; margin-top :5pt; margin-right: 5pt" width='100'>

                Integer dui est, euismod eget congue eu, malesuada eget ligula. Proin iaculis justo magna, ut auctor eros ornare nec. Phasellus at lorem eu tortor dictum imperdiet. Quisque tellus est, ullamcorper quis elit quis, cursus sodales justo. Ut venenatis malesuada semper. Integer vel dolor congue mauris rutrum posuere semper non tellus. Quisque mollis eget ipsum ac condimentum. Nam vel bibendum ante. Sed tristique, libero porttitor maximus ultrices, metus nisi consequat eros, in efficitur enim ligula nec erat. Fusce lacus nisi, dapibus vel orci eget, convallis lobortis massa. Nunc sed sem at odio laoreet dignissim id vehicula odio. Phasellus nulla velit, convallis et mollis sed, dictum eget lacus.
                <br><br>
                Sed in pellentesque nisl, sed rhoncus lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc et placerat libero, vitae venenatis sapien. Sed semper turpis vel risus aliquet, nec convallis leo ornare. Fusce lobortis ac ipsum vitae feugiat. Nam neque nulla, eleifend a dui posuere, venenatis congue nisl. Vestibulum euismod enim vitae odio fermentum ornare.
                <img src="zdjecie.png" alt="zdjecie" style="float:right; margin-top :5pt; margin-left: 5pt" width='100'>

                Donec fermentum volutpat elit, non ornare sem mattis ac. Etiam posuere pharetra lorem, sed volutpat urna vestibulum quis. Curabitur sit amet ligula quis augue dictum posuere. In id venenatis nulla, quis pulvinar tortor. Nunc posuere, massa in mattis faucibus, erat neque pharetra diam, eget posuere nunc lacus eu urna. Donec tincidunt ante at tellus commodo, vel porta mauris pulvinar. Donec sem sapien, auctor non congue vel, vehicula volutpat quam. Praesent rutrum iaculis luctus. Pellentesque hendrerit hendrerit posuere. Proin non velit eget mauris iaculis interdum id nec arcu. Etiam convallis eget magna ac faucibus.
                <br><br>
                Sed sagittis eget ipsum congue maximus. Donec at hendrerit nisl. Praesent pulvinar ullamcorper sodales. Phasellus dapibus, augue eu dapibus imperdiet, nisl justo porttitor mi, viverra sodales ex diam nec eros. Maecenas suscipit nisi in fermentum interdum. Curabitur sodales nisl et turpis accumsan faucibus. Vivamus non gravida nisi. Suspendisse viverra lacus ac rutrum porttitor. Nulla a nulla metus.
            </p>`,
            'aboutus': `<h1>O nas</h1>
            <p>We are a leading provider of specialist utility and infrastructure support services. We work in partnership with our customers across both regulated and non-regulated environments to optimise asset performance, supporting the security, resiliency and longevity of their critical networks.

We combine traditional services with market-leading digital asset management solutions, enhancing our customers’ decision-making process through a system thinking approach; resulting in improved asset efficiency and cost certainty.  <img src="zdjecie.png" alt="zdjecie" style="float:right; margin-top :5pt; margin-left: 5pt" width='100'>With national coverage capability, we’re always on-hand to respond to your planned and reactive needs, ensuring your network remains operational every day, every hour, no matter what. <img src="zdjecie.png" alt="zdjecie" style="float:left; margin-top :5pt; margin-right: 5pt" width='100'>Our forward thinking, innovative mindset is embedded in our culture, and we remain fully focussed on building long-standing customer relationships, at all times maintaining our reputation as a safe, trustworthy and reliable partner. 


Supported by our smart systems, innovative ways of working and cutting-edge technology, we ensure we deliver on time, on budget and above all safely.
            </p>`,
            'contact': `<h1>Kontakt</h1><p>Cześć, aby się z nami skontaktować wystaczy, ż napiszesz do nas wiadomość mailową: <br>
        <center><a href=mailto:lorem@ipsum.pl>lorem@ipsum.pl</a></center></p>`
        };

        function getPageContent(page) {
            var contentToReturn;
            switch (page) {
                case 'home':
                    contentToReturn = pages.home;
                    break;
                case 'aboutus':
                    contentToReturn = pages.aboutus;
                    break;
                case 'services':
                    contentToReturn = pages.services;
                    break;
                case 'contact':
                    contentToReturn = pages.contact;
                    break;
                default:
                    contentToReturn = pages.home;
                    break;
            }
            document.getElementById('content').innerHTML = contentToReturn;
        }