"use client";

import React, { useEffect } from 'react';

function OrientationMessage() {
    useEffect(() => {
        const message = document.getElementById('orientation-message');

        function checkOrientation() {
            if (window.innerHeight < window.innerWidth) {
                message.style.display = 'block';
            } else {
                message.style.display = 'none';
            }
        }

        window.addEventListener('resize', checkOrientation);
        checkOrientation();

        return () => {
            window.removeEventListener('resize', checkOrientation);
        };
    }, []);

    return null;
}

export default OrientationMessage;