import React, { Component } from 'react';

class Report extends Component {
    render() {
        return (
            <div className="readme">
            <h2><a href={"https://github.com/WissamSawah/me-react"} className="github">{"GitHub Repo"}</a></h2>
            <div className="line"></div><br></br>
            <h2>In order to run this application you will have to execute the following commands:</h2><br></br>
            
            <h3>`npm install`</h3><br></br>
            <p>install all the necessery npm modules.</p><br></br>
            <h3>`npm start</h3><br></br>
            <p>Start the application in development mode.</p><br></br>
            <h3>`npm run build`</h3><br></br>
            <p>Build the application in production mode.</p><br></br>
            </div>
        )
    }
}


export default Report;
