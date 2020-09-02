import React from "react"
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
                    <ul className="side-icons">
                        <NavIcon pageName={this.state.pageName} spanText="HOME" iconName="Home" link="/Home" />
                        <NavIcon pageName={this.state.pageName} spanText="ABOUT" iconName="About" link="/About" />
                        <NavIcon pageName={this.state.pageName} spanText="SKILLS" iconName="Skills" link="/Skills" />
                        <NavIcon pageName={this.state.pageName} spanText="PROJECTS" iconName="MyWork" link="/MyWork" />
                        <NavIcon pageName={this.state.pageName} spanText="CONTACT" iconName="Contact" link="/Contact" />
                    </ul>
            </nav>
        )
    }
}

export default NavBar
