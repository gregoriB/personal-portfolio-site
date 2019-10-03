import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../contexts/StateContext";

import "../styles/nav-mobile.css";
import "../styles/nav-desktop.css";

type MouseClick = React.MouseEvent<any>;

const NavBar = () => {
    const {
        currentPage,
        setCurrentPage,
        isNavOpen,
        setIsNavOpen,
        isMobile,
        setIsMobile,
        isModalOpen
    } = useContext(StateContext);
    const [logo, setLogo] = useState("");

    const updateDisplay = (e: MouseClick) => {
        const { name, type } = e.currentTarget.dataset;
        if (name === currentPage || (name === "Home" && !currentPage)) {
            return e.preventDefault();
        }
        if (type === "social-media") {
            return e.currentTarget.blur();
        }

        !e.ctrlKey && setCurrentPage(name);
        setIsNavOpen(false);
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const assignNavClass = () => {
        if (!isMobile) {
            return `desktop-nav`;
        }

        return `mobile-nav ${isNavOpen ? "active" : "inactive"}`;
    };

    useEffect(() => {
        const checkIfMobile = () => {
            const mobileScreen = { width: 1300, height: 400 };
            const isDisplayMobile =
                window.innerWidth < mobileScreen.width || window.innerHeight < mobileScreen.height;
            setIsMobile(isDisplayMobile);
        };
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, [setIsMobile]);

    const navBarJSXProperties = {
        tabIndex: isModalOpen ? -1 : undefined,
        onClick: (e: MouseClick) => updateDisplay(e)
    };

    const anchorTagProperties = {
        target: "_blank",
        rel: "noopener noreferrer",
        "data-type": "social-media"
    };

    const logoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        logoRef.current!.focus();
    }, [currentPage]);

    useEffect(() => {
        const dynamicLogo = (text: string = ""): string => {
            const generateBannerText = () => {
                const coinToss = Math.random();
                return coinToss <= 0.33
                    ? "brandon-gregori.com"
                    : coinToss > 0.33 && coinToss < 0.66
                    ? "Web Developer"
                    : "Brandon Gregori";
            };
            const maximumLoops = 1000;
            let newBannerText = generateBannerText(),
                counter = 0;
            while (newBannerText === text && counter < maximumLoops) {
                newBannerText = generateBannerText();
                counter++;
            }
            return newBannerText;
        };
        setLogo("Brandon Gregori");
        const randomNames = window.setInterval(
            () => setLogo(prevState => dynamicLogo(prevState)),
            10000
        );

        return () => {
            clearInterval(randomNames);
        };
    }, []);

    return (
        <div className={assignNavClass()}>
            <div className="logo" ref={logoRef} tabIndex={-1}>
                <div>
                    <Link
                        className={
                            currentPage.toLowerCase() === "home" || currentPage === ""
                                ? "active-link"
                                : undefined
                        }
                        data-name="Home"
                        to="/"
                        {...navBarJSXProperties}
                    >
                        {logo}
                    </Link>
                </div>
            </div>
            <button onClick={toggleNav}>|||</button>
            <div className="links">
                <Link
                    className={
                        currentPage.toLowerCase() === "home" || currentPage === ""
                            ? "active-link"
                            : undefined
                    }
                    data-name="Home"
                    to="/"
                    {...navBarJSXProperties}
                >
                    Home
                </Link>
                <Link
                    className={currentPage.toLowerCase() === "about" ? "active-link" : undefined}
                    data-name="About"
                    to="About"
                    {...navBarJSXProperties}
                >
                    About Me
                </Link>
                <Link
                    className={currentPage.toLowerCase() === "projects" ? "active-link" : undefined}
                    data-name="Projects"
                    to="Projects"
                    {...navBarJSXProperties}
                >
                    My Projects
                </Link>
                <Link
                    className={currentPage.toLowerCase() === "contact" ? "active-link" : undefined}
                    data-name="Contact"
                    to="Contact"
                    {...navBarJSXProperties}
                >
                    Contact Info
                </Link>
            </div>
            <div className="social-media">
                <a
                    href="https://github.com/gregoriB"
                    id="github-image"
                    {...navBarJSXProperties}
                    {...anchorTagProperties}
                >
                    Github
                </a>
                <a
                    href="https://www.linkedin.com/in/brandon-gregori"
                    id="linkedin-image"
                    {...navBarJSXProperties}
                    {...anchorTagProperties}
                >
                    Linkedin
                </a>
                <a
                    href="https://twitter.com/BrandonGregori"
                    id="twitter-image"
                    {...navBarJSXProperties}
                    {...anchorTagProperties}
                >
                    Twitter
                </a>
            </div>
        </div>
    );
};

export default NavBar;
