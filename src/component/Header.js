import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
const Title=()=>
  (
<a href="/">
  <img className='logo' src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-book-store-logo-template-sale-learning-logo-designs-vector-png-image_5272617.jpg" />
</a>
    )

const Header=()=>{
  const cartItem=useSelector((store)=>store.app.items);
  console.log(cartItem);
  return(
    <div className='header'>
      {<Title/>}
      <div className='nav-item'>
        <ul>
        <Link to={"/"}><li>Home</li></Link>
         <Link to={"/Cart"}><li>cartItem-{cartItem.length}</li></Link>
         <Link to={"/"}><li>Sing-up</li></Link> 
        </ul>
      </div>
    </div>
  )

}
export default Header;