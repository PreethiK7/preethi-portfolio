import React from "react"

class Project extends React.Component {

    constructor({link, title, imageUrl, id}){
        super()
        this.state = {
            link: link,
            title: title,
            imageUrl: imageUrl,
            id: id,
            isHovering: false
        }
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.toggleHoverState = this.toggleHoverState.bind(this);
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
        return(
            <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} className="project-tile">
                <a href={this.state.link} target="_blank">
                    <span className={this.state.isHovering?"project-title hovered-class":"project-title"}>{this.state.title}</span>
                    <br/>
                    <img className={this.state.isHovering?"project-image hovered-image-class":"project-image"} src={this.state.imageUrl} alt={this.state.id}/>
                </a>
                {
                    (this.state.id % 2 === 0)?(<><br/><br/></>):(<></>)
                }
            </div>
        )
    }
}

export default Project