'use client';

import React, { useEffect } from 'react';

function MenuButton() {
    function Menu() {
        let x = document.getElementsByClassName("navbar_text");
        let navbar = document.getElementById("navbar");
        let xfirst = document.getElementsByClassName("navbar_text")[0];
        let menu = document.getElementById("menu");
        for (let i = 0; i < x.length; i++) {
            if (x[i].id !== "menu") {
                if (x[i].style.display === "none") {
                    x[i].style.display = "block";
                    navbar.style.height = "50vh";
                    menu.style.backgroundColor = "#ECDFCC";
                    menu.style.color = "black";
                } else {
                    x[i].style.display = "none";
                    xfirst.style.display = "block";
                    navbar.style.height = "15vh";
                    menu.style.backgroundColor = "#262626";
                    menu.style.color = "#F6CF60";
                }
            }
        }
    }

    useEffect(() => {
        const header = document.getElementById('img_landschaft');
        const button = document.getElementById('navbar');

        function updateButtonPosition() {
            if (header && button) {
                const headerBottom = header.getBoundingClientRect().bottom;

                if (headerBottom > 0) {
                    // Button bleibt unter dem Header
                    button.style.top = `${headerBottom}px`;
                } else {
                    // Button fixieren, wenn Header nicht sichtbar ist
                    button.style.top = '0';
                }
            }
        }

        // Initiale Position des Buttons setzen
        updateButtonPosition();

        // Update position on scroll and window resize
        window.addEventListener('scroll', updateButtonPosition);
        window.addEventListener('resize', updateButtonPosition);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', updateButtonPosition);
            window.removeEventListener('resize', updateButtonPosition);
        };
    }, []);

    return (
        <div id="menu" onClick={Menu} className="navbar_text">Menü</div>
    );
}

export default MenuButton;