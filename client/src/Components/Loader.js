import React from "react"

class Loader extends React.Component {

    render() {
        return (
            <>
                <div className="loader-div">
                    <img src={require("../Images/loading_p.png")} id="loading-img" alt="P"/>
                    <br/>
                    <span>&lt;&nbsp;Preethi is thinking...&nbsp;/&gt;</span>
                    <div className="progress-horizontal">
                        <div className="bar-horizontal"></div>
                    </div>
                </div>
            </>
        )
    }

}

export default Loader