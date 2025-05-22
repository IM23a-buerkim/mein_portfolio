import './variables.css';
import './styles.css';
import './mainstyle.css';
import './projekte_style.css';
import MenuButton from './MenuButton';


export const viewport = {
    themeColor: '#697565',
}

export const metadata = {
    title: 'Manuel Bürki',
    description: 'Portfolio von Manuel Bürki',
    manifest: '/manifest.json',
}

export default function RootLayout({children}) {
    return (
        <html lang="de">
        <head>
            <meta name="theme-color" content="#697565"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            <link rel="manifest" href="/manifest.json"/>
        </head>
        <body>
        <header>
            <div id="img_landschaft" style={{backgroundImage: "url('/Landschaft_Portfolio.jpg')"}}></div>
            <div id="img_landschaft_cover">
                <div id="img_landschaft_left">
                    <div id="img_landschaft_left_foto" style={{backgroundImage: "url('/mein_foto_2.png')"}}></div>
                </div>
                <div id="img_landschaft_right">
                    <div id="img_landschaft_right_top">
                        <a href="https://github.com/IM23a-buerkim" target="_blank" className="ilrt_text">Github</a>
                        <a href="mailto:manunobu@gmail.com" className="ilrt_text">E-Mail</a>
                        <a href="https://instagram.com/manuel_buerki__" target="_blank" className="ilrt_text">Instagram</a>
                    </div>
                    <div id="img_landschaft_right_middle">
                        <div className="ilrm_text">Manuel</div>
                        <div className="ilrm_text">Bürki</div>
                    </div>
                    <div id="img_landschaft_right_bottom">
                        <div className="ilrb_text">Willkommen auf <br/> meiner Webseite</div>
                    </div>
                </div>
            </div>
        </header>
        <div id="navbar">
            <a href="#img_landschaft" className="navbar_text">Home</a>
            <a href="#projekt_abstand" className="navbar_text">Projekte</a>
            <a href="#ueber_abstand" className="navbar_text">Über mich</a>
            <a href="#skills" className="navbar_text">Skills</a>
            <MenuButton/>
        </div>
        <main>
            {children}
        </main>
        <footer>
            <div id="footer">
                <div id="footer_copy" className="footer_text">© 2025 Manuel Bürki</div>
                <div id="footer_icons">
                    <a href="https://github.com/IM23a-buerkim" target="_blank" className="footer_icons" style={{backgroundImage: "url('/github.png')"}}></a>
                    <a href="mailto:manunobu@gmail.com" target="_blank" className="footer_icons" style={{backgroundImage: "url('/email.png')"}}></a>
                    <a href="https://instagram.com/manuel_buerki__" target="_blank" className="footer_icons" style={{backgroundImage: "url('/instagram.png')"}}></a>
                </div>
                <div id="footer_impressum">Impressum</div>
            </div>
        </footer>
        </body>
        </html>
    )
}