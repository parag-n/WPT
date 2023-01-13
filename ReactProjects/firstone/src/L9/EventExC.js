import React from "react";

export default class EventExC extends React.Component{

    handler(){
        console.log("Hello from class")
    }
    render(){
        return(<>
            <button onClick={this.handler}>Show Hello From Class</button>
            </>)
    }
}