import React from "react";
import "./Footer.css";

function Footer() {
    return(
        <footer className = "footer-wrapper">
            <div className = "scrolling-text">
                <h1>BUY MORE ARTBUY MORE ARTBUY MORE ARTBUY MORE ART</h1>
            </div>

            <div className = "info-wrapper">
                <div className = "social-wrapper">
                    <span>

                        <img src ="./assets/icons/tiktok.svg " alt = "tiktok"></img>
                        <img src ="./assets/icons/instagram.svg " alt = "instagram"></img>

                    </span>
                </div>

                <p>2024 Copyright Dominic Bloomfield</p>

            </div>

        </footer>
    );
    
}

export default Footer