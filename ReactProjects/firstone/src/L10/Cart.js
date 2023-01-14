import CartAdd from "./CartAdd"
import CartBill from "./CartBill"
import CartShow from "./CartShow"
import "./style.css"
export default function Cart(){
    //variables
    let cart=[]

    //methods
    let inventory={all:[
        {id:1,name:"first",price:100},
        {id:2,name:"second",price:200},
        {id:3,name:"third",price:300},
        {id:4,name:"fourth",price:400}
    ]}
    let addToCart=(ind,cqty,ccost)=>{
        cart.push({cname:inventory.all[ind].name,cprice:inventory.all[ind].price,cqty:cqty,ccost:ccost})
        console.log(cart)
    }
    return(<div className="cart">
        <h4>Cart</h4>
        <CartAdd inventory={inventory} addToCart={addToCart}></CartAdd>
        <CartShow/>
        <CartBill/>
    </div>)
}