export default function MathsComponent(props){
    let num1=Number.parseInt(props.num1)
    let num2=Number.parseInt(props.num2)
    let operator=props.op
    let result;
    let fun

    switch(operator){
        case '+':
            fun="addition"
            result=num1+num2;
            break;
        case '-':
            fun="Subtraction"
            result=num1-num2
            break;
        case '*':
            fun="Multiplication"
            result=num1*num2;
            break;
        case '/':
            fun="Division"
            result=num1/num2;
            break;
        default:
            break;
    }



    return(<>
        <h4>{fun} of {props.num1} and {props.num2} is {result}</h4>
    
    </>)
}