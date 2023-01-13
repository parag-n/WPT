
export default function ShowCaps(){
    let handler=(someSource)=>{
        let id=someSource.target.id
        if(id=="n1"){
            var num1=id.value
            console.log(num1)
        }
        if(id=="n2"){
            var num2=id.value
        }
        
        console.log(someSource)
    }
    let handler2=()=>{
        
    }

    return(<>
        <input type="text" id="n1" onChange={handler}></input>
        <input type="text" id="n2" onChange={handler}></input>
        <button onClick={handler2}>Calculate</button>
    </>)
}