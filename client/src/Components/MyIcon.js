import React from "react"
import {DiHtml5, DiJavascript, DiJava, DiReact, DiNodejs, DiPython, DiCss3, DiAngularSimple, DiSwift, DiDjango, DiAws, DiGit, DiMysql, DiSpark, DiScala} from "react-icons/di"

class MyIcon extends React.Component {
    constructor({name}){
        super()
        this.state = {
            iconName: name,
            isHovering: false
        }
        this.handleMouseHover = this.handleMouseHover.bind(this)
        this.toggleHoverState = this.toggleHoverState.bind(this)
    }

    handleMouseHover(event) {
        this.setState(this.toggleHoverState)
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        var icon = <div></div>
        if(this.state.iconName === "HTML"){
            icon = <DiHtml5/>
        }
        else if (this.state.iconName === "JavaScript"){
            icon = <DiJavascript/>
        }
        else if (this.state.iconName === "JAVA"){
            icon = <DiJava/>
        }
        else if (this.state.iconName === "ReactJS"){
            icon = <DiReact/>
        }
        else if (this.state.iconName === "NodeJS"){
            icon = <DiNodejs/>
        }
        else if (this.state.iconName === "Python"){
            icon = <DiPython/>
        }
        else if(this.state.iconName === "CSS") {
            icon = <DiCss3/>
        }
        else if(this.state.iconName === "AngularJS"){
            icon = <DiAngularSimple/>
        }
        else if(this.state.iconName === "Swift"){
            icon = <DiSwift/>
        }
        else if(this.state.iconName === "Django"){
            icon = <DiDjango/>
        }
        else if(this.state.iconName === "AWS") {
            icon = <DiAws/>
        }
        else if(this.state.iconName === "GIT"){
            icon = <DiGit/>
        }
        else if(this.state.iconName === "SQL"){
            icon = <DiMysql/>
        }
        else if(this.state.iconName === "Spark"){
            icon = <DiSpark/>
        }
        else if(this.state.iconName === "Scala"){
            icon = <DiScala/>
        }
        return(
            <li className={this.state.isHovering? "hovered-icon" : ""} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                {icon}
            </li>
        )
    }
}

export default MyIcon