import { useSelector, useDispatch } from 'react-redux'
import { clearCart, removeItems } from '../utils/1appSlice'
function Cart () {
  const dispatch = useDispatch()
  const CartItem = useSelector(store => store.app.items)
  console.log(CartItem)
  const remove=()=>{
    dispatch(removeItems());
  }
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  const Cart = ({ sourceImagePath, titleFull,workId,isbn }) => {
    return (
      <div className='cart'>
        <img src={sourceImagePath} alt="scr"></img>
        <h3 className='pink'>Book-Name-{titleFull}</h3>
        <h3 className='pink'>ISBN-{isbn}</h3>
        <h3 className='pink'>Price-{workId-9999}</h3>
        <button className='remove' onClick={remove}>🗑️</button>
       


      </div>
    )
  }
  console.log(CartItem)
  return (
    <div>
      {CartItem.map(res => {
        return <Cart {...res} />
      })}
      <button className='buttonclear' onClick={handleClearCart}>
        clear-Cart
      </button>
    </div>
  )
}
export default Cart
