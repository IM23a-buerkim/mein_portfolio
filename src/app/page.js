import React from 'react';
import './variables.css';
import './styles.css';
import './mainstyle.css';
import './projekte_style.css';
import Project from './projekte';


const Page = () => {
    return (
        <div className="content">
            <Project/>
            <div id="ueber">
                <div id="ueber_links">
                    <img id="ueber_links_foto" src="/Manuel_Portfolio.jpg" alt="Mein Foto"></img>
                </div>
                <div id="ueber_rechts">
                    <div id="ueber_rechts_titel">Über mich</div>
                    <div id="ueber_rechts_strich"></div>
                    <div id="ueber_rechts_text">
                        Mein Name ist Manuel Bürki und ich bin Informatikschüler an der Kantonsschule Hottingen.
                        Ich
                        interessiere mich für Fotografie, Rudern und Fahrradfahren. In meiner Freizeit
                        programmiere ich
                        gerne und arbeite an verschiedenen Projekten.
                    </div>
                    <div id="ueber_rechts_stichpunkte">
                        <div className="u_r_s_element">
                            <div className="u_r_s_titel">Alter:</div>
                            <div className="u_r_s_text">17 Jahre</div>
                        </div>
                        <div className="u_r_s_element">
                            <div className="u_r_s_titel">Wohnort:</div>
                            <div className="u_r_s_text">Zürich</div>
                        </div>
                        <div className="u_r_s_element">
                            <div className="u_r_s_titel">Beruf:</div>
                            <div className="u_r_s_text">Schüler</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="skills">
                <div id="s_titel">Skills</div>
                <div id="s_list">
                    <div className="s_l_element">
                        <div className="s_l_icon" style={{backgroundImage: "url('/dslr-camera.png')"}}></div>
                        <div className="s_l_titel">Fotografie</div>
                    </div>
                    <div className="s_l_element">
                        <div className="s_l_icon" style={{backgroundImage: "url('/rowing-boat.png')"}}></div>
                        <div className="s_l_titel">Rudern</div>
                    </div>
                    <div className="s_l_element">
                        <div className="s_l_icon" style={{backgroundImage: "url('/bicycle.png')"}}></div>
                        <div className="s_l_titel">Fahrrad<br/>fahren</div>
                    </div>
                    <div className="s_l_element">
                        <div className="s_l_icon" style={{backgroundImage: "url('/data.png')"}}></div>
                        <div className="s_l_titel">Programmieren</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;