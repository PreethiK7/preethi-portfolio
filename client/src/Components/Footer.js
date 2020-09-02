import React from "react";
import {FaFacebookF, FaLinkedinIn, FaInstagram} from "react-icons/fa"
import {GrGithub} from "react-icons/gr"

function Footer() {
    return (
        <footer>
            <ul className="social-list">
                <li>
                    <a href="https://www.facebook.com/preethi.kesavan.1614/?viewas=100000686899395">
                        <FaFacebookF/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/preethik7">
                        <FaLinkedinIn/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/PreethiK7">
                        <GrGithub/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/preethik7/">
                        <FaInstagram/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
