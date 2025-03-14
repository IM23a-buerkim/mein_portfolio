'use client';

import React from 'react';

function MenuButton() {
    function Menu() {
        let x = document.getElementsByClassName("navbar_text");
        let navbar = document.getElementById("navbar");
        let xfirst = document.getElementsByClassName("navbar_text")[0];
        let menu = document.getElementById("menu");
        for (let i = 0; i < x.length; i++) {
            if (x[i].id !== "menu") { // Exclude the "Menü" button
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

    return (
        <div id="menu" onClick={Menu} className="navbar_text">Menü</div>
    );
}

export default MenuButton;