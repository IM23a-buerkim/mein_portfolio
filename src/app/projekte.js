'use client';
import React, {useState, useEffect, useRef} from 'react';
import './projekte_style.css';

const Project = () => {
    const containerRef = useRef(null);
    const thumbRef = useRef(null);
    const wrapperRef = useRef(null);
    const isDragging = useRef(false);
    const startPosition = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        const thumb = thumbRef.current;
        const wrapper = wrapperRef.current;

        const updateThumbPosition = () => {
            const scrollPercent = container.scrollLeft / (container.scrollWidth - container.clientWidth);
            const maxOffset = wrapper.clientWidth - thumb.offsetWidth;
            thumb.style.left = `${scrollPercent * maxOffset}px`;
        };

        const startDragging = (e) => {
            isDragging.current = true;
            const thumbRect = thumb.getBoundingClientRect();
            startPosition.current = e.clientX - thumbRect.left;
            document.body.style.userSelect = 'none';
        };

        const stopDragging = () => {
            isDragging.current = false;
            document.body.style.userSelect = '';
        };

        const handleDrag = (e) => {
            if (!isDragging.current) return;
            e.preventDefault();

            const wrapperRect = wrapper.getBoundingClientRect();
            const newX = e.clientX - wrapperRect.left - startPosition.current;
            const maxScroll = wrapper.clientWidth - thumb.offsetWidth;
            const boundedX = Math.max(0, Math.min(newX, maxScroll));

            const scrollPercent = boundedX / maxScroll;
            container.scrollLeft = scrollPercent * (container.scrollWidth - container.clientWidth);
            thumb.style.left = `${boundedX}px`;
        };

        // Event listeners
        thumb.addEventListener('mousedown', startDragging);
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', stopDragging);
        document.addEventListener('mouseleave', stopDragging);
        container.addEventListener('scroll', updateThumbPosition);

        // Initial setup
        updateThumbPosition();

        return () => {
            thumb.removeEventListener('mousedown', startDragging);
            document.removeEventListener('mousemove', handleDrag);
            document.removeEventListener('mouseup', stopDragging);
            document.removeEventListener('mouseleave', stopDragging);
            container.removeEventListener('scroll', updateThumbPosition);
        };
    }, []);

    return (
        <div id="projekte">
            <div id="projekt_abstand"></div>
            <div id="projekt_titel">Projekte</div>
            <div id="projekt_strich"></div>
            <div id="projekt_container" ref={containerRef}>
                <a href="https://github.com/IM23a-buerkim/SCK_Try1" target="_blank" className="projekt_element">
                    <div className="projekt_icon" style={{backgroundImage: "url('/SCK_Try1.png')"}}></div>
                    <div className="projekt_inhalt">
                        <div className="projekt_titel">SCK_Try1</div>
                        <div className="projekt_text">Bei diesem Projekt habe ich versucht die Webseite meines Ruderclubs
                        zu verbessern.</div>
                        <div className="projekt_inhalt2">
                            <div className="projekt_sprache">HTML</div>
                            <div className="projekt_sprache">CSS</div>
                            <div className="projekt_sprache">JavaScript</div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/IM23a-buerkim/Geschichte-der-Schweizer-Uhrenindustrie" className="projekt_element">
                    <div className="projekt_icon" style={{backgroundImage: "url('/Geschichte-der-Schweizer-Uhrenindustrie.png')"}}></div>
                    <div className="projekt_inhalt">
                        <div className="projekt_titel">Geschichte-der-Schweizer-Uhrenindustrie</div>
                        <div className="projekt_text">Dieses Projekt habe ich mit Klassenkameraden gemacht. Wir haben
                            die Geschichte der Schweizer Uhrenindustrie auf einer Webseite dargestellt.
                        </div>
                        <div className="projekt_inhalt2">
                            <div className="projekt_sprache">HTML</div>
                            <div className="projekt_sprache">CSS</div>
                            <div className="projekt_sprache">JavaScript</div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/IM23a-buerkim/Schiffe-versenken" target="_blank" className="projekt_element">
                    <div className="projekt_icon" style={{backgroundImage: "url('/Schiffe-versenken.png')"}}></div>
                    <div className="projekt_inhalt">
                        <div className="projekt_titel">Schiffe-versenken</div>
                        <div className="projekt_text">Hier habe ich vor langer Zeit einmal ein Schiffe versenken Spiel
                            gemacht, nur mit Python.</div>
                        <div className="projekt_inhalt2">
                            <div className="projekt_sprache">Python</div>
                        </div>
                    </div>
                </a>
                <div id="projekt_element_wrapper_last">
                    <a href="https://github.com/IM23a-buerkim/mein_portfolio" target="_blank" className="projekt_element">
                        <div className="projekt_icon" style={{backgroundImage: "url('/mein_portfolio.png')"}}></div>
                        <div className="projekt_inhalt">
                            <div className="projekt_titel">mein_portfolio</div>
                            <div className="projekt_text">Das ist das Gitrepository von dieser Webseite.</div>
                            <div className="projekt_inhalt2">
                                <div className="projekt_sprache">JavaScript</div>
                                <div className="projekt_sprache">HTML</div>
                                <div className="projekt_sprache">CSS</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="scrollbar-wrapper" ref={wrapperRef}>
                <div className="scrollbar-thumb" ref={thumbRef}></div>
            </div>
        </div>
    )
        ;
};

export default Project;
//hbhbh