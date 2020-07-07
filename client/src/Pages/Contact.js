import React from "react"
import NavBar from "../Components/Navbar";
import Loader from "../Components/Loader";
import { renderEmail } from 'react-html-email'
import axios from "axios"


class Contact extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true,
            name: "",
            email: "",
            subject: "",
            message: ""
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetForm = this.resetForm.bind(this)
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

     handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        const messageHtml =  renderEmail(
            <>{this.state.subject}<br/>{this.state.message}</>
        );

        axios({
            method: "POST",
            url:"http://localhost:5000/api/send",
            data: {
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                messageHtml: messageHtml
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Email sent, awesome!");
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Oops, something went wrong. Try again")
            }
        })
    }

    resetForm(){
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
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
                    <NavBar page="Contact"/>
                    <div className="contact-content">
                        <div className="page-title">&lt;&nbsp;Drop a Message&nbsp;&gt;</div>
                        <br/>
                        <div className="contact-text">
                            I am interested in Internship / Co-Op and Full Time opportunities in the United States. However, if you have any other queries, feel free to contact me using the below form.
                        </div>
                        <br/>
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <input type="text" name="name" placeholder="Name" id="contactName" value={this.state.name} onChange={this.handleChange}/>
                            <input type="text" name="email" placeholder="Email" id="contactEmail" value={this.state.email} onChange={this.handleChange}/>
                            <br/>
                            <input type="text" name="subject" placeholder="Subject" id="contactSubject" value={this.state.subject} onChange={this.handleChange}/>
                            <br/>
                            <textarea name="message" placeholder="Message" id="contactMessage" value={this.state.message} onChange={this.handleChange}/>
                            <br/>
                            <button type="submit" id="contactSend">Send</button>
                        </form>
                    </div>
                </>
            )
        }
    }
}

export default Contact