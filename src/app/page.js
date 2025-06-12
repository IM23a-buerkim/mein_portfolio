"use client";
import React, {useState} from 'react';
import './variables.css';
import './styles.css';
import './mainstyle.css';
import './projekte_style.css';
import AgeComponent from './age.js';
import Project from './projekte';

const Page = () => {
    const [showProgrammierSkills, setShowProgrammierSkills] = useState(true);

    return (
        <div className="content">
            <Project/>
            <div id="ueber_abstand"></div>
            <div id="ueber">
                <div id="ueber_links">
                    <img id="ueber_links_foto" src="/Manuel_Portfolio.jpg" alt="Mein Foto"/>
                </div>
                <div id="ueber_rechts">
                    <div id="ueber_rechts_titel">Über mich</div>
                    <div id="ueber_rechts_strich"></div>
                    <div id="ueber_rechts_text">
                        Mein Name ist Manuel Bürki und ich bin Informatikschüler an der Kantonsschule Hottingen.
                        In meiner Freizeit rudere ich im Seeclub Küsnacht im Leistungsteam.
                        Wenn ich gerade nicht am Rudern bin, gehe ich gerne Rennrad fahren
                        oder unternehme etwas mit Freunden.
                    </div>
                    <div id="ueber_rechts_stichpunkte">
                        <div className="u_r_s_element">
                            <div className="u_r_s_titel">Alter:</div>
                            <AgeComponent/>
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
                <div id="skills_switch_line">
                    <div id="skills_switch_field">
                        <div
                            id="skills_switch_Andere"
                            className={showProgrammierSkills ? '' : 'active'}
                            onClick={() => setShowProgrammierSkills(false)}
                        >Andere</div>
                        <div
                            id="skills_switch_Programmieren"
                            className={showProgrammierSkills ? 'active' : ''}
                            onClick={() => setShowProgrammierSkills(true)}
                        >Programmieren</div>
                    </div>
                </div>
                <div id="s_titel">Skills</div>

                {showProgrammierSkills ? (
                    <div id="s_list_programmieren" style={{display: 'flex'}}>
                        <div className="s_l_element">
                            <div className="s_l_icon" style={{backgroundImage: "url('/data.png')"}}></div>
                            <div className="s_l_titel">Programmieren</div>
                        </div>
                    </div>
                ) : (
                    <div id="s_list_andere" style={{display: 'flex'}}>
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
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
