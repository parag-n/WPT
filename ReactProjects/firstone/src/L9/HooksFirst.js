import Component from "react"
export default class Adding extends Component(){
    
    constructor(){
        this.ele="";

    }
    
    render(){
        let handler=()=>{
            
        }

        let handler2=()=>{
            
        }

        return(<>
            <input id="n1" type="text" onChange={handler}></input>
            {/* <input id="n1" type="text" onChange={handler}></input> */}
            <button onClick={handler2}></button>
            <div></div>
        </>)
    }
}