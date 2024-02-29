import {useSelector,useDispatch} from "react-redux"
import { clearCart} from "../utils/1appSlice";
function Cart(){
    const dispatch=useDispatch();
    const CartItem=useSelector((store)=>store.app.items);
    console.log(CartItem);
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    console.log(CartItem)
    return(
        <div>
            <h1>{CartItem.map((res)=>"Name"+res.titleFull+"\n")}</h1>
            <button className="buttonclear"
            onClick={handleClearCart}>clear-Cart</button>
            

        </div>
    )
}
export default Cart;