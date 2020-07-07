import React from "react"
import NavBar from "../Components/Navbar";
import {Link} from "react-router-dom"
import Loader from "../Components/Loader";


class Home extends React.Component{

    constructor(){
        super()
        this.state = {
            isLoading: true
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
    }

    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({isLoading: false}) , 700)
    }

    componentWillUnmount() {
        if(this.timerHandle) {
            clearTimeout(this.timerHandle)
            this.timerHandle = 0
        }
    }

    render() {
        if(this.state.isLoading) {

            return (
                <Loader />
            )
        }
        else{
            return (
                <>
                    <NavBar page="Home"/>
                    <div className="home-content">
                        &lt; Hi, <br/> <br/>
                        I am Preethi, <br/> <br/>
                        Web Developer.  &gt; <br/> <br/>
                    </div>
                    <div className="contact-me">
                        <Link to="/Contact">
                            <span>REACH OUT</span>
                        </Link>
                    </div>
                    <img className="my-photo-home" src={require("../Images/Me_2.jpg")} alt=""/>
                </>
            )
        }
    }


}

export default Home