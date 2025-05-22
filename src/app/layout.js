"use client";

import React, {useState} from 'react';
import './variables.css';
import './styles.css';
import './mainstyle.css';
import './projekte_style.css';
import {metadata, viewport} from './metadata';
import MenuButton from './MenuButton';

const Modal = ({message, onConfirm}) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>Impressum
                    <br/><br/>
                    Verantwortlich für den Inhalt dieser Webseite:<br/>
                    Manuel Bürki<br/>
                    Adresse auf Anfrage<br/>
                    manunobu@gmail.com<br/>
                    <br/>
                    Zweck der Webseite:<br/>
                    Diese Webseite wurde im Rahmen eines Schulprojekts erstellt. Sie dient ausschliesslich
                    Bildungszwecken und verfolgt keinerlei kommerzielle Interessen.
                    <br/><br/>
                    Bilder und Inhalte:<br/>
                    Alle gezeigten Bilder, insbesondere das Titelbild sowie Fotos, auf denen ich selbst zu sehen bin,
                    wurden von mir persönlich erstellt. Es wurden keine urheberrechtlich geschützten Inhalte Dritter
                    ohne Erlaubnis verwendet.
                    <br/><br/>
                    Haftungshinweis:<br/>
                    Diese Webseite richtet sich nicht an die Öffentlichkeit und ist nicht auf Gewinn ausgerichtet.
                    Sollte dennoch ein Unternehmen oder eine Person der Ansicht sein, dass Inhalte ihre Rechte
                    verletzen, bitte ich um eine einfache Kontaktaufnahme. Ich werde betroffene Inhalte umgehend prüfen
                    und gegebenenfalls entfernen. Es besteht keine Absicht, Rechte Dritter zu verletzen.
                    <br/><br/>
                    Kontakt:<br/>
                    manunobu@gmail.com</p>
                <div className="button-wrapper">
                    <button onClick={onConfirm}>OK</button>
                </div>
            </div>
        </div>
    );
};

export default function RootLayout({children}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImpressumClick = () => {
        setIsModalOpen(true);
    };

    const handleModalConfirm = () => {
        setIsModalOpen(false);
    };

    return (
        <html lang="de">
        <head>
            <meta name="theme-color" content="#697565"/>
            <meta name="description" content={metadata.description}/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            <link rel="manifest" href="/manifest.json"/>
            <title>{metadata.title}</title>
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
                        <a href="https://instagram.com/manuel_buerki__" target="_blank"
                           className="ilrt_text">Instagram</a>
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
                    <a href="https://github.com/IM23a-buerkim" target="_blank" className="footer_icons"
                       style={{backgroundImage: "url('/github.png')"}}></a>
                    <a href="mailto:manunobu@gmail.com" target="_blank" className="footer_icons"
                       style={{backgroundImage: "url('/email.png')"}}></a>
                    <a href="https://instagram.com/manuel_buerki__" target="_blank" className="footer_icons"
                       style={{backgroundImage: "url('/instagram.png')"}}></a>
                </div>
                <div id="footer_impressum" onClick={handleImpressumClick}>Impressum</div>
            </div>
        </footer>
        {isModalOpen && (
            <Modal
                message=""
                onConfirm={handleModalConfirm}
            />
        )}
        </body>
        </html>
    );
}