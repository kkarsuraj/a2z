import React from "react";
import "../../styles/global.css";
import "../../styles/homepage/feature.css";
import { SectionTitle, Ellipse} from "../elements.js";



const FeatureSection = () => {
    return (
        <section className="feature-section">
            <div className="container">
                <SectionTitle title="Features" heading="Key Features of A2Z POS" />
                <div className="">

                </div>
            </div>
            <Ellipse/>
        </section>
    )
};

export default FeatureSection
