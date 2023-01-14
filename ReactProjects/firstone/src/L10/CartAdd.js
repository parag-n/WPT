import './style.css'
import { Component } from "react";

export default class CartAdd extends Component{
    //constructor
    constructor(props){
        super(props);
        this.state={cost:0}
    }
    //variables
    allitems=this.props.inventory.all.map((ele,index)=>{
        return <option key={ele.id} value={index}>{ele.name}    {ele.price}</option>
    })
    // alloptions={...this.allitems}
    selectItem=0;
    selectQty=0;
    
    //functions
    selectItemhandler=(e)=>{
        this.selectItem=e.target.value
        let value=this.props.inventory.all[this.selectItem].price*this.selectQty;
        this.setState({cost: value})
    }
    qtyHandler=(e)=>{
        this.selectQty=e.target.value
        let value=this.props.inventory.all[this.selectItem].price*this.selectQty;
        console.log(value)
        this.setState({cost: value})
    }
    render(){
        return(<div className="add">
            <h4>Add</h4>
            <select onChange={this.selectItemhandler}>{this.allitems}</select>

            <input type="number" onChange={this.qtyHandler}
            className="input" placeholder='enter qty'></input>
            
            <p>Total cost is: {this.state.cost}</p>
            
            <button onClick={()=>{this.props.addToCart(this.selectItem,this.selectQty,this.state.cost)}}>Add to cart</button>
        </div>)
    }
}