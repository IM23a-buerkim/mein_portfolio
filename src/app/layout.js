import './styles.css';

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <header>
            <div id="img_landschaft" style={{backgroundImage: "url('/Landschaft_Portfolio.jpg')"}}></div>
            <div id="img_landschaft_cover">
                <div id="img_landschaft_left">
                    <div id="img_landschaft_left_foto"></div>
                </div>
                <div id="img_landschaft_right">
                    <div id="img_landschaft_right_top">
                        <a href="#" className="ilrt_text">Github</a>
                        <a href="#" className="ilrt_text">E-Mail</a>
                        <a href="#" className="ilrt_text">Instagram</a>
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
            <div id="navbar">
                <a href="#" className="navbar_text">Home</a>
                <a href="#" className="navbar_text">Projekte</a>
                <a href="#" className="navbar_text">Über mich</a>
                <a href="#" className="navbar_text">Skills</a>
            </div>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <div id="footer">
                <div className="footer_text">© 2025 Manuel Bürki</div>
                <div id="footer_icons">
                    <a href="#" className="footer_icons">Github</a>
                    <a href="#" className="footer_icons">E-Mail</a>
                    <a href="#" className="footer_icons">Instagram</a>
                </div>
                <div id="footer_impressum">Impressum</div>
            </div>
        </footer>
        </body>
        </html>
    )
}