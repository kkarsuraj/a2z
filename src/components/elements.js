import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react"
import { Link } from "gatsby"
import "../styles/global.css";
import Ellipse1 from "../images/ellipse-1.png";
import Ellipse2 from "../images/ellipse-2.png";
import Ellipse3 from "../images/ellipse-3.png";
import Ellipse4 from "../images/ellipse-4.png";
import Ellipse5 from "../images/ellipse-5.png";
import Ellipse6 from "../images/ellipse-6.png";

export const SectionTitle = ({ title, heading }) => {
    return (
        <div className="section-title">
            <h2>{title}</h2>
            <h3>{heading}</h3>
        </div>
    );
};

export const ButtonLink1 = ({ children, url = "", ...props }) => {
    const buttonRef = useRef(null);

    const createRipple = (event) => {
        const button = buttonRef.current;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    };

    return url === "" ? (
        <button
            ref={buttonRef}
            className="button-link-1"
            type="submit"
            onClick={createRipple}
            {...props}
        >
            <span className="shine"></span>
            {children}
        </button>
    ) : (
        <Link
            to={url}
            ref={buttonRef}
            className="button-link-1"
            {...props}
        >
            <span className="shine"></span>
            {children}
        </Link>
    );
};

export const ButtonLink2 = ({ children, url = "", ...props }) => {
    const buttonRef = useRef(null);

    const createRipple = (event) => {
        const button = buttonRef.current;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    };

    return url === "" ? (
        <button
            ref={buttonRef}
            className="button-link-2"
            type="submit"
            onClick={createRipple}
            {...props}
        >
            <span className="shine"></span>
            {children}
        </button>
    ) : (
        <Link
            to={url}
            ref={buttonRef}
            className="button-link-2"
            {...props}
        >
            <span className="shine"></span>
            {children}
        </Link>
    );
};

export const Ellipse = () => (
    <div className="ellipse-container">
        <div className="orbit orbit-1"><img src={Ellipse4} alt="Ellipse 1" /></div>
        <div className="orbit orbit-2"><img src={Ellipse6} alt="Ellipse 2" /></div>
        <div className="orbit orbit-3"><img src={Ellipse2} alt="Ellipse 3" /></div>
        <div className="orbit orbit-4"><img src={Ellipse1} alt="Ellipse 4" /></div>
        <div className="orbit orbit-5"><img src={Ellipse5} alt="Ellipse 5" /></div>
        <div className="orbit orbit-6"><img src={Ellipse3} alt="Ellipse 6" /></div>
    </div>
);

export const AnimateButton = forwardRef(
    ({ children, Magnetic = false, Ripple = false, Shine = false, className = "", url = "", onClick, ...props }, ref) => {
        const internalRef = useRef(null);

        // Expose internalRef to parent via forwarded ref
        useImperativeHandle(ref, () => internalRef.current);

        const createRipple = (event) => {
            if (!Ripple) return;
            const button = internalRef.current;
            if (!button) return;

            const circle = document.createElement("span");
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
            circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
            circle.classList.add("ripple");

            const ripple = button.getElementsByClassName("ripple")[0];
            if (ripple) {
            ripple.remove();
            }

            button.appendChild(circle);

            if (typeof onClick === "function") {
                onClick(event);
            }
        };

        useEffect(() => {
            if (!Magnetic) return;
            const button = internalRef.current;
            if (!button) return;

            const magnetism = 0.5; // How much the cursor moves the button
            const springStrength = 0.25; // How strong the spring force is
            const dampening = 0.25; // How much the button slows down after leaving the cursor
            const elasticity = 0; // How much the button seems to spring back after leaving the cursor

            let currentX = 0;
            let currentY = 0;
            let velocityX = 0;
            let velocityY = 0;
            let animationFrame = null;

            function updateButtonPosition() {
              button.style.transform = `translate(${currentX}px, ${currentY}px)`;
            }

            function animate() {
              velocityX *= dampening;
              velocityY *= dampening;
              currentX += velocityX;
              currentY += velocityY;
              const distance = Math.sqrt(currentX * currentX + currentY * currentY);
              if (Math.abs(distance) < 0.01 && Math.abs(velocityX) < 0.01 && Math.abs(velocityY) < 0.01) {
                currentX = 0;
                currentY = 0;
                velocityX = 0;
                velocityY = 0;
                updateButtonPosition();
                cancelAnimationFrame(animationFrame);
                return;
              }
              // Spring force towards origin
              const springForceX = -currentX * springStrength;
              const springForceY = -currentY * springStrength;
              velocityX += springForceX;
              velocityY += springForceY;
              updateButtonPosition();
              animationFrame = requestAnimationFrame(animate);
            }

            const handleMouseMove = (e) => {
              cancelAnimationFrame(animationFrame);
              const rect = button.getBoundingClientRect();
              currentX = e.clientX - rect.left - rect.width / 2;
              currentY = e.clientY - rect.top - rect.height / 2;
              // Apply magnetism
              currentX *= magnetism;
              currentY *= magnetism;
              velocityX = 0;
              velocityY = 0;
              updateButtonPosition();
            };

            const handleMouseLeave = (e) => {
              const rect = button.getBoundingClientRect();
              const exitX = e.clientX - rect.left - rect.width / 2;
              const exitY = e.clientY - rect.top - rect.height / 2;
              // Set initial velocity in the opposite direction of exit
              velocityX = -exitX * magnetism * elasticity;
              velocityY = -exitY * magnetism * elasticity;
              animate();
            };

            button.addEventListener('mousemove', handleMouseMove);
            button.addEventListener('mouseleave', handleMouseLeave);

            return () => {
              button.removeEventListener('mousemove', handleMouseMove);
              button.removeEventListener('mouseleave', handleMouseLeave);
            };
        }, []);

        return url === "" ? (
            <button
                ref={internalRef}
                className={`submit-button ${Magnetic ? 'magnetic-button' : ''} ${className}`}
                type="submit"
                onClick={Ripple ? createRipple : onClick}
                {...props}
            >
                {Shine ? <span className="shine"></span> : ''}
                {Magnetic ? <span>{children}</span> : children}
            </button>
        ) : (
            <Link
                to={url}
                ref={internalRef}
                className={`submit-button ${Magnetic ? 'magnetic-button' : ''} ${className}`}
                {...props}
            >
                {Shine ? <span className="shine"></span> : ''}
                {Magnetic ? <span>{children}</span> : children}
            </Link>
        );
    }
);
