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
            <div id="projekt_titel">Projekte</div>
            <div id="projekt_strich"></div>
            <div id="projekt_container" ref={containerRef}>
                <div className="projekt_element">
                    <div className="projekt_icon" style={{backgroundImage: "url('/data.png')"}}></div>
                    <div className="projekt_inhalt">
                        <div className="projekt_titel">Projekt 1</div>
                        <div className="projekt_text">Dies ist ein Beispieltext für Projekt 1.</div>
                        <div className="projekt_inhalt2">
                            <div className="projekt_sprache">Java</div>
                        </div>
                    </div>
                </div>
                <div className="projekt_element">
                    <div className="projekt_icon" style={{backgroundImage: "url('/data.png')"}}></div>
                    <div className="projekt_inhalt">
                        <div className="projekt_titel">Projekt 2</div>
                        <div className="projekt_text">Dies ist ein Beispieltext für Projekt 1. Dies ist ein Beispieltext für Projekt 1. Dies ist ein Beispieltext für Projekt 1.</div>
                        <div className="projekt_inhalt2">
                            <div className="projekt_sprache">Java</div>
                            <div className="projekt_sprache">Java</div>
                            <div className="projekt_sprache">Java</div>
                            <div className="projekt_sprache">Java</div>
                            <div className="projekt_sprache">Java</div>
                            <div className="projekt_sprache">Java</div>
                        </div>
                    </div>
                </div>
                <div className="projekt_element">
                    <div className="projekt_icon" style={{backgroundImage: "url('/data.png')"}}></div>
                    <div className="projekt_inhalt">
                        <div className="projekt_titel">Projekt 3</div>
                        <div className="projekt_text">Dies ist ein Beispieltext für Projekt 1.</div>
                        <div className="projekt_inhalt2">
                            <div className="projekt_sprache">Java</div>
                        </div>
                    </div>
                </div>
                <div className="projekt_element">
                    <div className="projekt_icon" style={{backgroundImage: "url('/data.png')"}}></div>
                    <div className="projekt_inhalt">
                        <div className="projekt_titel">Projekt 4</div>
                        <div className="projekt_text">Dies ist ein Beispieltext für Projekt 1.</div>
                        <div className="projekt_inhalt2">
                            <div className="projekt_sprache">Java</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scrollbar-wrapper" ref={wrapperRef}>
                <div className="scrollbar-thumb" ref={thumbRef}></div>
            </div>
        </div>
    );
};

export default Project;
//hbhbh