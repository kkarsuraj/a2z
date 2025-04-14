import React from "react";
import "../../styles/global.css";
import "../../styles/homepage/partner.css";
import { SectionTitle, Ellipse} from "../../components/elements.js";
import Partner1 from "../../images/partner-1.png";
import Partner2 from "../../images/partner-2.png";
import Partner3 from "../../images/partner-3.png";
import Partner4 from "../../images/partner-4.png";
import Partner5 from "../../images/partner-5.png";
import Partner6 from "../../images/partner-6.png";
import Partner7 from "../../images/partner-7.png";


const PartnerSection = () => {
    return (
        <section className="partner-section">
            <div className="container">
                <SectionTitle title="partners" heading="Our Delivery Partners" />
                <div className="partners-wrapper">
                    <div class="partners-list">
                        <div class="partners"><img src={Partner1} /></div>
                        <div class="partners"><img src={Partner2} /></div>
                        <div class="partners"><img src={Partner3} /></div>
                        <div class="partners"><img src={Partner4} /></div>
                        <div class="partners"><img src={Partner5} /></div>
                    </div>
                    <div class="partners-list">
                        <div class="partners"><img src={Partner6} /></div>
                        <div class="partners"><img src={Partner7} /></div>
                    </div>
                </div>
            </div>
            <Ellipse/>
        </section>
    )
};

export default PartnerSection
