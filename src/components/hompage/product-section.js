import React, { useRef, useEffect, useState } from 'react';
import "../../styles/homepage/product.css";
import { SectionTitle, Ellipse, AnimateButton} from "../elements.js";
import { Link } from 'gatsby';
import Product1 from "../../images/product-1.png";
import Product2 from "../../images/product-2.png";
import Product3 from "../../images/product-3.png";
import Product4 from "../../images/product-4.png";
import Product5 from "../../images/product-5.png";
import Product6 from "../../images/product-6.png";
import Product7 from "../../images/product-7.png";
import Product8 from "../../images/product-8.png";

import "aos/dist/aos.css";
import AOS from "aos";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";


const ProductSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const swiperRef = useRef(null);
    const [freeModeEnabled, setFreeModeEnabled] = useState(true);

    const handleMouseEnter = () => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
            setFreeModeEnabled(false);
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.start();
            setFreeModeEnabled(true);
        }
    };
    return (
        <section className="product-section">
            <div className="container">
                <div className="content-wrapper">
                    <SectionTitle title="Products" heading="See Our products" />
                    <p>Transform your checkout experience with a POS solution that simplifies transactions, enhances efficiency, and empowers your business to thrive.</p>
                </div>
                <div className="swiper-wrapper"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        loop={true}
                        // freeMode={true}
                        freeMode={freeModeEnabled}
                        autoplay={{
                            delay: 0,
                            // pauseOnMouseEnter:true,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={4}
                        spaceBetween={50}
                        speed={1500}
                        grabCursor={true}
                        allowTouchMove={true}
                    >
                        <SwiperSlide>
                            <Link to="/" className="slide-content">
                                <div className="shadow-wrapper" data-aos="zoom-in-up">
                                    <img src={Product1} />
                                    <span className="shadow"></span>
                                </div>
                                <h4>Card Reader</h4>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/" className="slide-content">
                                <div className="shadow-wrapper" data-aos="zoom-in-up">
                                    <img src={Product2} />
                                    <span className="shadow"></span>
                                </div>
                                <h4>Receipt Printer</h4>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/" className="slide-content">
                                <div className="shadow-wrapper" data-aos="zoom-in-up">
                                    <img src={Product3} />
                                    <span className="shadow"></span>
                                </div>
                                <h4>Barcode Scanner</h4>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/" className="slide-content">
                                <div className="shadow-wrapper" data-aos="zoom-in-up">
                                    <img src={Product4} />
                                    <span className="shadow"></span>
                                </div>
                                <h4>Customer Screen</h4>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/" className="slide-content">
                                <div className="shadow-wrapper" data-aos="zoom-in-up">
                                    <img src={Product5} />
                                    <span className="shadow"></span>
                                </div>
                                <h4>Receipt Printerr</h4>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/" className="slide-content">
                                <div className="shadow-wrapper" data-aos="zoom-in-up">
                                    <img src={Product6} />
                                    <span className="shadow"></span>
                                </div>
                                <h4>Barcode Scanner</h4>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/" className="slide-content">
                                <div className="shadow-wrapper" data-aos="zoom-in-up">
                                    <img src={Product7} />
                                    <span className="shadow"></span>
                                </div>
                                <h4>Customer Screen</h4>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/" className="slide-content">
                                <div className="shadow-wrapper" data-aos="zoom-in-up">
                                    <img src={Product8} />
                                    <span className="shadow"></span>
                                </div>
                                <h4>POS System</h4>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <AnimateButton Shine={true} Ripple={true}>See All Products</AnimateButton>
            </div>
            <Ellipse/>
        </section>
    )
};

export default ProductSection
