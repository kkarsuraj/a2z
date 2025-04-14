import React from "react";
import "../../styles/global.css";
import "../../styles/homepage/hero.css";
import { ButtonLink1, ButtonLink2, Ellipse, RippleButton } from "../../components/elements.js";
import Hero from "../../images/home-hero.gif";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div>
                    <h2>Smart POS. Faster Growth. Seamless Transactions.</h2>
                    <p>Seamless payments, inventory tracking, and real-time analytics—all in one simple solution.</p>
                </div>
                <div className="button-wrapper">
                    <ButtonLink2 url="/store-login">Get Started for Free</ButtonLink2>
                    <ButtonLink1 url="/schedule-demo">Become A Merchant</ButtonLink1>
                </div>
                <div className="hero-wrapper">
                    <div className="shadow-wrapper">
                        <img src={Hero} />
                        <span className="shadow"></span>
                    </div>
                    <div className="hero-form-wrapper">
                        <h3>Get Your Free Demo Now!</h3>
                        <form>
                            <div className="input-wrapper">
                                <input type="text" placeholder="Name*" required/>
                                <input type="email" placeholder="Email*" required/>
                                <input type="phone" placeholder="Phone Number*" required/>
                                <input type="text" placeholder="Business Name" />
                            </div>
                            <RippleButton Shine={true} Ripple={true}>Send</RippleButton>
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
