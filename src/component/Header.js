const Title=()=>
  (
<a href="/">
  <img className='logo' src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-book-store-logo-template-sale-learning-logo-designs-vector-png-image_5272617.jpg" />
</a>
    )

const Header=()=>{
  return(
    <div className='header'>
      {<Title/>}
      <div className='nav-item'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )

}
export default Header;