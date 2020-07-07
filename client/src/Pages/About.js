import React from "react"
import NavBar from "../Components/Navbar";
import Loader from "../Components/Loader";
import {GiSpellBook, GiCookingPot, GiPizzaSlice, GiHarryPotterSkull, GiTv, GiLoveSong} from "react-icons/gi"
import {FaLaptopCode, FaRegGrinStars, FaGraduationCap} from "react-icons/fa"
import {IoIosPeople} from "react-icons/io"


class About extends React.Component{
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
        else {
            return (
                <>
                    <NavBar page="About"/>
                    <div className="about-content">
                        <div className="page-title">&lt;&nbsp;Get to know me&nbsp;&gt;<br/><span>** Me talking about myself **</span></div>
                        <br/>
                        <div className="about-text">
                            <span>I am a Graduate Student <FaGraduationCap/> in CS at UT-Dallas. I am obsessed with solving problems and even more obsessed with developing the solutions.</span><br/><br/>
                            Enjoy reading Kane and Abel, Da Vince Code, Harry Potter<GiSpellBook/><br/>
                            Loves Cooking <GiCookingPot/> Can eat Italian<GiPizzaSlice/> any time of day<br/>
                            Would love to be in Gryffindor <GiHarryPotterSkull/> <br/>
                            Binge watches <GiTv /> Friends, Naruto, Wizards of Waverly Place <br/>
                            <GiLoveSong/>Humn to A Whole New World, The Climb, Little Things <br/>
                            <br/>
                            <br/>
                            <span>Interested in Web based Application Development <FaLaptopCode/> and working on innovative projects with positive people. <IoIosPeople/></span>
                            <div><br/> - Preethi Kesavan <FaRegGrinStars/></div>
                        </div>
                        <img className="my-photo" src={require("../Images/Me_1.JPG")} alt="It's me!"/>
                    </div>
                </>
            )
        }
    }
}

export default About