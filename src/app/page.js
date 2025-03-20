import React from 'react';
import Layout from './layout';
import './mainstyle.css';


const Page = () => {
    return (
        <div className="content">
            <div id="projekte">
                <h2>Projekte</h2>
            </div>
            <div id="ueber">
                <h2>Über mich</h2>
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