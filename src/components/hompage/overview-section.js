import React, {useEffect} from "react";
import "../../styles/homepage/overview.css";
import { SectionTitle, Ellipse, AnimateButton} from "../../components/elements.js";
import Video from "../../images/home-video.png";

import "aos/dist/aos.css";
import AOS from "aos";

const OverviewSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className="overview-section">
            <div className="container">
                <SectionTitle title="overview" heading="How A2Z Works" />
                <div className="overview-wrapper">
                    <div className="shadow-wrapper" data-aos="fade-right" data-aos-duration="1500">
                        <img src={Video} />
                        <span className="shadow"></span>
                    </div>
                    <div className="content-items" data-aos="fade-left" data-aos-duration="1500">
                        <p>A2Z POS offers powerful hardware and software designed specifically for retail, liquor, and convenience stores.</p>
                        <div className="item-list">
                            <div className="items">
                                <div className="item-icon">
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.7263 13.3333C30.3353 16.3217 29.9013 19.4286 28.4968 22.1357C27.0923 24.8429 24.8022 26.9867 22.0084 28.2097C19.2145 29.4328 16.0858 29.661 13.1441 28.8565C10.2023 28.0519 7.62526 26.2632 5.8427 23.7885C4.06015 21.3139 3.17983 18.303 3.34855 15.2578C3.51728 12.2127 4.72484 9.31744 6.76987 7.05488C8.8149 4.79232 11.5738 3.29923 14.5864 2.82459C17.5991 2.34995 20.6834 2.92247 23.325 4.44665" stroke="#747ED1" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.6602 14.6673L16.6602 18.6673L29.9935 5.33398" stroke="#747ED1" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <h4>Easy to Use</h4>
                            </div>
                            <div className="items">
                                <div className="item-icon">
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.3294 29.3327C23.6932 29.3327 29.6628 23.3631 29.6628 15.9993C29.6628 8.63555 23.6932 2.66602 16.3294 2.66602C8.96563 2.66602 2.99609 8.63555 2.99609 15.9993C2.99609 23.3631 8.96563 29.3327 16.3294 29.3327Z" stroke="#747ED1" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M16.3281 8V16L21.6615 18.6667" stroke="#747ED1" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <h4>Fast Transactions</h4>
                            </div>
                            <div className="items">
                                <div className="item-icon">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 25.5C17.2044 25.5 16.4413 25.1839 15.8787 24.6213C15.3161 24.0587 15 23.2956 15 22.5C15 20.835 16.335 19.5 18 19.5C18.7956 19.5 19.5587 19.8161 20.1213 20.3787C20.6839 20.9413 21 21.7044 21 22.5C21 23.2956 20.6839 24.0587 20.1213 24.6213C19.5587 25.1839 18.7956 25.5 18 25.5ZM27 30V15H9V30H27ZM27 12C27.7956 12 28.5587 12.3161 29.1213 12.8787C29.6839 13.4413 30 14.2044 30 15V30C30 30.7956 29.6839 31.5587 29.1213 32.1213C28.5587 32.6839 27.7956 33 27 33H9C8.20435 33 7.44129 32.6839 6.87868 32.1213C6.31607 31.5587 6 30.7956 6 30V15C6 13.335 7.335 12 9 12H10.5V9C10.5 7.01088 11.2902 5.10322 12.6967 3.6967C14.1032 2.29018 16.0109 1.5 18 1.5C18.9849 1.5 19.9602 1.69399 20.8701 2.0709C21.7801 2.44781 22.6069 3.00026 23.3033 3.6967C23.9997 4.39314 24.5522 5.21993 24.9291 6.12987C25.306 7.03982 25.5 8.01509 25.5 9V12H27ZM18 4.5C16.8065 4.5 15.6619 4.97411 14.818 5.81802C13.9741 6.66193 13.5 7.80653 13.5 9V12H22.5V9C22.5 7.80653 22.0259 6.66193 21.182 5.81802C20.3381 4.97411 19.1935 4.5 18 4.5Z" fill="#747ED1"/>
                                    </svg>
                                </div>
                                <h4>Secure Payments</h4>
                            </div>
                        </div>
                        <AnimateButton Shine={true} Ripple={true}>Schedule Demo</AnimateButton>
                    </div>
                </div>
            </div>
            <Ellipse/>
        </section>
    )
};

export default OverviewSection
