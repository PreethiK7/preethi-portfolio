import React from "react"
import {Link} from "react-router-dom";
import {GoHome, GoPerson, GoTools, GoProject, GoMail} from "react-icons/go"

class NavIcon extends React.Component {
    constructor({spanText, iconName, link, pageName}) {
        super();
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            spanText: spanText,
            iconName: iconName,
            link: link,
            pageName: pageName
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        var iconSpan = <span></span>
        if(!this.state.isHovering) {
            if (this.state.iconName === "Home") {
                iconSpan = <GoHome/>
            } else if (this.state.iconName === "About") {
                iconSpan = <GoPerson/>
            } else if (this.state.iconName === "MyWork") {
                iconSpan = <GoProject/>
            } else if (this.state.iconName === "Skills") {
                iconSpan = <GoTools/>
            } else if (this.state.iconName === "Contact") {
                iconSpan = <GoMail/>
            }
        }
        else{
            iconSpan = <span>{this.state.spanText}</span>
        }
        return (
            <li className={(this.state.iconName === this.state.pageName)?"in-page":""} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                <Link to={this.state.link}>
                    {iconSpan}
                </Link>
            </li>
        )
    }
}
export default NavIcon