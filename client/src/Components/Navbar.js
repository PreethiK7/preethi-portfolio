import React from "react"
import {Link} from "react-router-dom"
import {FaFacebookF, FaLinkedinIn, FaInstagram} from "react-icons/fa"
import {GrGithub} from "react-icons/gr"
import { IconContext } from "react-icons";
import NavIcon from "./NavIcon";


class NavBar extends React.Component{

    constructor({page}){
        super()
        this.state = {
            pageName: page
        }
    }

    render() {
        return(
            <nav>
                <IconContext.Provider value={{className: 'react-icons'}}>
                    <ul className="logo-list">
                        <Link to="/About" >
                            <li id="logo-img">
                            </li>
                        </Link>
                    </ul>
                </IconContext.Provider>
                    <ul className="side-icons">
                        <NavIcon pageName={this.state.pageName} spanText="HOME" iconName="Home" link="/Home" />
                        <NavIcon pageName={this.state.pageName} spanText="ABOUT" iconName="About" link="/About" />
                        <NavIcon pageName={this.state.pageName} spanText="SKILLS" iconName="Skills" link="/Skills" />
                        <NavIcon pageName={this.state.pageName} spanText="PROJECTS" iconName="MyWork" link="/MyWork" />
                        <NavIcon pageName={this.state.pageName} spanText="CONTACT" iconName="Contact" link="/Contact" />
                    </ul>
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
            </nav>
        )
    }
}

export default NavBar