import "../../styles/homepage/customer.css";
import { SectionTitle, Ellipse, AnimateButton} from "../../components/elements.js";
import Customer1 from "../../images/customer-1.png";
import Customer2 from "../../images/customer-2.png";
import Customer3 from "../../images/customer-3.png";
import Customer4 from "../../images/customer-4.png";
import Customer5 from "../../images/customer-5.png";
import Customer6 from "../../images/customer-6.png";
import Customer7 from "../../images/customer-7.png";
import Customer8 from "../../images/customer-8.png";
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import "aos/dist/aos.css";
import AOS from "aos";

const CustomerSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.destroy();
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <section className="customer-section">
            <div className="container">
                <SectionTitle title="customers" heading="What Our Customers Love About Us" />
                <div className="swiper-wrapper" data-aos="fade-up-left" data-aos-duration="1500">
                    <Swiper
                        modules={[Navigation]}
                        loop={true}
                        slidesPerView={2.7}
                        spaceBetween={20}
                        onSwiper={setSwiperInstance}
                        style={{ paddingBottom: '20px' }}
                    >
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src={Customer1} alt="Customer" className="customer-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src={Customer2} alt="Customer" className="customer-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src={Customer3} alt="Customer" className="customer-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src={Customer4} alt="Customer" className="customer-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src={Customer5} alt="Customer" className="customer-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src={Customer6} alt="Customer" className="customer-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src={Customer7} alt="Customer" className="customer-image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src={Customer8} alt="Customer" className="customer-image" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="slider-nav-container">
                        <AnimateButton ref={prevRef} Shine={true} Ripple={true} className="slider-nav-button">
                            <svg width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.88765 10.3193C0.315823 10.9187 0.338193 11.8682 0.937614 12.44L10.7057 21.7585C11.3052 22.3303 12.2547 22.3079 12.8265 21.7085C13.3983 21.1091 13.3759 20.1596 12.7765 19.5878L4.09373 11.3047L12.3768 2.62191C12.9486 2.02249 12.9263 1.073 12.3268 0.501175C11.7274 -0.0706525 10.7779 -0.0482827 10.2061 0.551139L0.88765 10.3193ZM31.9959 9.1469L1.93767 9.85507L2.00833 12.8542L32.0666 12.1461L31.9959 9.1469Z" fill="white"/>
                            </svg>
                        </AnimateButton>
                        <AnimateButton ref={nextRef} Shine={true} Ripple={true} className="slider-nav-button">
                            <svg width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.1123 12.6807C32.6842 12.0813 32.6618 11.1318 32.0624 10.56L22.2943 1.24154C21.6948 0.669717 20.7453 0.692087 20.1735 1.29151C19.6017 1.89093 19.6241 2.84041 20.2235 3.41224L28.9063 11.6953L20.6232 20.3781C20.0514 20.9775 20.0737 21.927 20.6732 22.4988C21.2726 23.0707 22.2221 23.0483 22.7939 22.4489L32.1123 12.6807ZM1.00408 13.8531L31.0623 13.1449L30.9917 10.1458L0.93342 10.8539L1.00408 13.8531Z" fill="white"/>
                            </svg>
                        </AnimateButton>
                    </div>
                </div>
            </div>
            <Ellipse/>
        </section>
    )
};

export default CustomerSection
