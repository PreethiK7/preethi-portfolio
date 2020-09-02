import React from "react"
import NavBar from "../Components/Navbar";
import Loader from "../Components/Loader";
import projects_data from "../projects_data";
import Project from "../Components/Project";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

class MyWork extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true,
            projects: projects_data
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
        if (this.state.isLoading) {
            return (
                <Loader/>
            )
        } else {
            return (
                <>
                    <Header/>
                    <NavBar page="MyWork"/>
                    <main>
                        <div className="my-work-content content-div">
                            <div className="page-title">&lt;&nbsp;Projects&nbsp;&gt;</div>
                            <br/>
                            <div className="my-work-text">
                                {
                                    this.state.projects.map(proj => (
                                        <Project key={proj.id} link={proj.link} title={proj.title} imageUrl={proj.imageUrl} id={proj.id} />
                                    ))
                                }
                            </div>
                        </div>
                    </main>
                    <Footer/>
                </>
            )
        }
    }
}

export default MyWork
