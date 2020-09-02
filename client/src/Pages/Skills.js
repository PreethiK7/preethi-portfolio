import React from "react"
import NavBar from "../Components/Navbar";
import Loader from "../Components/Loader";
import {Link} from "react-router-dom"
import icons from "../icon_data"
import MyIcon from "../Components/MyIcon";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

class Skills extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true,
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
    }

    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({isLoading: false}), 700)
    }

    componentWillUnmount() {
        if(this.timerHandle){
            clearTimeout(this.timerHandle)
            this.timerHandle = 0
        }
    }

    render() {
        if(this.state.isLoading){
            return (
                <Loader />
            )
        }
        else{
            return (
                <>
                    <Header/>
                    <NavBar page="Skills"/>
                    <main className="skills-page">
                        <div className="skills-content content-div">
                            <div className="page-title">&lt;&nbsp;Skills & Experience&nbsp;&gt;</div>
                            <br/>
                            <div className="skills-text">
                                The main area of my expertise is Full Stack Development (Client & Server side of the Web)<br/><br/>
                                HTML, JavaScript, Java, building small Full Stack Applications. <br/><br/>
                                I have experience in <b>Full Stack Software Development</b> working as 'Member Technical Staff' at <b>Zoho Corporation</b> for a year and a half.<br/><br/>
                                Visit my <a href="https://www.linkedin.com/in/preethik7">LinkedIn</a> profile for additional information or <Link to="/Contact">Reach Out To Me Here</Link>
                            </div>
                        </div>
                        <div className="skills-images">
                            <ul>
                                {
                                    icons.map(icon => (
                                        <MyIcon name={icon} />
                                    ))
                                }
                            </ul>
                        </div>
                    </main>
                    <Footer/>
                </>
            )
        }
    }
}

export default Skills
