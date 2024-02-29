import { Link } from "react-router-dom";
import { BookList } from "../constant"
import { useState } from "react"
function filterdata (searchInput,Book){
    const filterData = Book.filter((book) =>
        book.title.toLowerCase().includes(searchInput?.toLowerCase())
    );
    return filterData;
    
  }  
  const RestaurantCard=({title,id1,id2})=>{
    return(
      <div className='card'>
   
      <img src={'https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid='+id1+'&cat=default&size=amazon&id='+id2}> 
      </img>
       
  
        <h2>{title}</h2>
  
      </div>
    )
  }
  const Body=()=>{
    const [searchInput,setSearchInput]=useState("");
    const [Book,setBook]=useState(BookList.result.data.panMacmillanContributor.primaryEditions)
    const Bookfilter=(BookList.result.data.panMacmillanContributor.primaryEditions)


    return (
        <>
       <div className="search-container">
        <input type="text" className="search-input" placeholder="search" value={searchInput} onChange={(e)=>{
            setSearchInput(e.target.value)
        }}/>
        <button className="search-btn" onClick={()=>{
            const data=filterdata(searchInput,Bookfilter);
            setBook(data);
            console.log(Book)
            }}>Search</button>
        <h1>{searchInput}</h1>
       </div>
      <div className='book-list'>
      
      {
            Book.map((res)=>{
                return (<Link to={'BookMenue/'+res.fields.slug}> <RestaurantCard {...res}  /></Link>);
            })}
      </div>
            </>
    )
  }

  export default Body;