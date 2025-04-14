import React, { useState } from "react";
import "../styles/global.css";
import HeroSection from "../components/hompage/hero-section.js";
import FaqsSection from "../components/hompage/faqs-section.js";
import OverviewSection from "../components/hompage/overview-section.js";
import PartnerSection from "../components/hompage/partner-section.js";
import CustomerSection from "../components/hompage/customer-section.js";
import FeatureSection from "../components/hompage/feature-section.js";
import ProductSection from "../components/hompage/product-section.js";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <ProductSection />
            <OverviewSection />
            <PartnerSection />
            <CustomerSection />
            <FaqsSection />
        </>
    )
};

export default HomePage
