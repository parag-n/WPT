export default function EventEx(){
    function handler(){
        console.log("Hello.. mofo!")

    }
    
    return(
        <div>
            <button onClick={handler}>Show Hello</button>
        </div>
    )
}