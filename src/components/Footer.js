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

                <p className = "copyright">The artist, (Dominic Bloomfield and All Associated Works), 
                    rights are protected by the Federal Copyright Act of 1976 and the Federal Visual Rights Act of 1990. 
                    Purchase of a copyrighted artwork does not transfer the copyright. The copyright to produce the works 
                    in copies, to produce derivative work based on the copyrighted image, and distribute copies is retained 
                    by the Visual Artist. Any transfer of this copyright must be in writing expressly identifying what rights 
                    are being sold and for what purpose. ​ Works of art cannot be modified without the permission of the artist. 
                    Works cannot be distributed, mutilated, or modified in any way that would prejudice the reputation of the Artist.
                    
                </p>

            </div>

        </footer>
    );
    
}

export default Footer