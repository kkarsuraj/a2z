import React, { useEffect, useRef } from "react";
import "../../styles/homepage/hero.css";
import { ButtonLink1, ButtonLink2, Ellipse, AnimateButton } from "../../components/elements.js";
import Hero from "../../images/home-hero.gif";

import "aos/dist/aos.css";
import AOS from "aos";

const HeroSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const spanRef = useRef(null);
    const headingRef = useRef(null);
    useEffect(() => {
        const typer = spanRef.current;
        const wordsToType = typer.getAttribute("data-words").split(",");
        const erasingSpeed = parseInt(typer.getAttribute("data-erasing-speed")) || 75;
        const erasingDelay = parseInt(typer.getAttribute("data-erasing-delay")) || 500;
        const typingSpeed = parseInt(typer.getAttribute("data-typing-speed")) || 150;
        const typingDelay = parseInt(typer.getAttribute("data-typing-delay")) || 2000;
        let currentWordIndex = 0;
        let currentCharacterIndex = 0;
        function type() {
            const wordToType = wordsToType[currentWordIndex % wordsToType.length];
            if (currentCharacterIndex < wordToType.length) {
                typer.innerHTML += wordToType[currentCharacterIndex++];
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(erase, typingDelay);
            }
        }
        function erase() {
            const wordToType = wordsToType[currentWordIndex % wordsToType.length];
            if (currentCharacterIndex > 0) {
                typer.innerHTML = wordToType.substr(0, --currentCharacterIndex - 1);
                setTimeout(erase, erasingSpeed);
            } else {
                currentWordIndex++;
                setTimeout(type, erasingDelay);
            }
        }
        type();
    }, []);
    return (
        <section className="hero-section">
            <div className="container">
                <div>
                    <h2 className="typewriter" ref={headingRef}>Smart POS. Faster Growth. Seamless Transactions.</h2>
                    <p className="blink">All in one simple solution—<span ref={spanRef}
                        data-words="Seamless payments.,inventory tracking.,and real-time analytics."
                        data-typing-speed="150"
                        data-typing-delay="2000"></span></p>
                </div>
                <div className="button-wrapper" data-aos="fade-up">
                    <ButtonLink2 url="/store-login">Get Started for Free</ButtonLink2>
                    <ButtonLink1 url="/schedule-demo">Become A Merchant</ButtonLink1>
                </div>
                <div className="hero-wrapper">
                    <div className="shadow-wrapper" data-aos="fade-right" data-aos-duration="1500">
                        <img src={Hero} />
                        <span className="shadow"></span>
                    </div>
                    <div className="hero-form-wrapper" data-aos="fade-left" data-aos-duration="1500">
                        <h3>Get Your Free Demo Now!</h3>
                        <form>
                            <div className="input-wrapper">
                                <input type="text" placeholder="Name*" required/>
                                <input type="email" placeholder="Email*" required/>
                                <input type="phone" placeholder="Phone Number*" required/>
                                <input type="text" placeholder="Business Name" />
                            </div>
                            <AnimateButton Shine={true} Ripple={true}>Send</AnimateButton>
                        </form>
                    </div>
                </div>
            </div>
            <Ellipse/>
        </section>
    )
};


// export const Head = () => <Seo title="Home" />

export default HeroSection
