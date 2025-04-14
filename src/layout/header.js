import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css";
import "../styles/header.css";
import Logo from "../images/logo.png";
import { ButtonLink1, ButtonLink2 } from "../components/elements.js"

const HeaderMenu = [
  {
    text: "Services",
    submenu: [
        {
            heading: "Hardware",
            subsubmenu: [
                {
                    text: "POS",
                    url: "/services/hardware/pos"
                },
                {
                    text: "Barcode Scanner",
                    url: "/services/hardware/barcode-scanner"
                },
                {
                    text: "Receipt Printer",
                    url: "/services/hardware/receipt-printer"
                },
                {
                    text: "Customer Facing Screen",
                    url: "/services/hardware/customer-facing-screen"
                },
                {
                    text: "Credit Card Reader",
                    url: "/services/hardware/credit-card-reader"
                },
            ]
        },
        {
            heading: "Software",
            subsubmenu: [
                {
                    text: "Inventry",
                    url: "/services/software/Inventory"
                },
                {
                    text: "E-Order",
                    url: "/services/software/e-order"
                },
                {
                    text: "Reporting",
                    url: "/services/software/reporting"
                },
                {
                    text: "Employees",
                    url: "/services/software/employees"
                },
                {
                    text: "Loyalty Management",
                    url: "/services/software/loyalty-management"
                },
            ]
        },
        {
            heading: "Payment Processing",
            subsubmenu: [
                {
                    text: "Cash Discount",
                    url: "/services/payment-processing/cash-discount"
                },
                {
                    text: "Traditional Pricing",
                    url: "/services/payment-processing/traditional-pricing"
                },
            ]
        },
    ],
  },
  {
    text: "Store Types",
    submenu: [
        {
            text: "Convenience Store",
            url: "/store-types/convenience-store"
        },
        {
            text: "Liquore Store",
            url: "/store-types/liquore-store"
        },
        {
            text: "Neighbourhood Market",
            url: "/store-types/neighbourhood-market"
        },
    ],
  },
  {
    text: "Pricing",
    url: "/pricing",
  },
  {
    text: "About A2Z",
    submenu: [
        {
            text: "Our Story",
            url: "/about/our-story"
        },
        {
            text: "FAQs",
            url: "/about/faqs"
        },
        {
            text: "Contact Us",
            url: "/about/contact-us"
        },
        {
            text: "Careers",
            url: "/about/careers"
        },
    ],
  },
  {
    text: "Blog",
    url: "/blog",
    submenu: [
        {
            text: "E-commerce Tips",
            url: "/blog/ecommerce-tips"
        },
        {
            text: "Marketing",
            url: "/blog/marketing"
        },
        {
            text: "Case Studies",
            url: "/blog/case-studies"
        },
        {
            text: "Platform Updates",
            url: "/blog/updates"
        },
    ],
  }
]

const Header = () => (
    <header>
        <Link to="/" className="division-1">
            <img src={Logo} height={43} />
        </Link>
        <div className="division-2">
            {HeaderMenu.map((item, index) => (
                <div key={index} className="menu-wrapper">
                    {/* Main item */}
                    {item.url ? (
                        <Link to={item.url} className="menu-link">
                            {item.text}
                        </Link>
                    ) : (
                        <span className="menu-link">{item.text}</span>
                    )}

                    {/* Chevron icon if submenu exists */}
                    {item.submenu && (
                        <svg
                        className="submenu-icon"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M4 6L8.5 10L13 6"
                            stroke="#222222"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                    )}

                    {/* Submenu items */}
                    {item.submenu && (
                        <div className="submenu" style={item?.submenu?.some(sub => sub.heading) ? {flexDirection: 'row', gap: '30px'} : undefined }>
                            {item.submenu.map((subItem, subIndex) => (
                                <div key={subIndex} className="submenu-item">
                                    {subItem.heading ? (
                                        <h2>{subItem.heading}</h2>
                                    ) : subItem.url ? (
                                        <Link to={subItem.url}>{subItem.text}</Link>
                                    ) : (
                                        <span>{subItem.text}</span>
                                    )}

                                    {subItem.subsubmenu && subItem.subsubmenu.map((subSubItem, subSubIndex) => (
                                        <div key={subSubIndex}>
                                            {subSubItem.url ? (
                                                <Link to={subSubItem.url}>{subSubItem.text}</Link>
                                            ) : (
                                                <span>{subSubItem.text}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
        <div className="division-3 button-wrapper">
            <ButtonLink1 url="/schedule-demo">Schedule Demo</ButtonLink1>
            <ButtonLink2 url="/store-login">Store Login</ButtonLink2>
        </div>
    </header>
);


// export const Head = () => <Seo title="Home" />

export default Header
