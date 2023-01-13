
//importing an external css
import "./c1.css"

export default function C3(props){
    let amount=5000;
    let disc=props.discount
    let finalamt=amount - (disc*amount/100)
    const myinline={
        backgroundColor: '#000000',
        color: '#ffffff'
    }

    return(
        <p style={myinline}>The bill amount is {finalamt} after {disc} percent discount</p>
        /* following is for external css
        <p class="outline">The bill amount is {finalamt} after {disc} percent discount</p>*/
    )
}