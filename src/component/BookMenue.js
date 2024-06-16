import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch} from "react-redux"
import {addItems} from '../utils/1appSlice'
// import Title from './Title'
import Review from './Review'
const BookMenue=()=>{
    const {id1,id2,id3}=useParams();
    const[Book,setBook]=useState({});
    useEffect(() => {
         // eslint-disable-next-line
        return () => {
             // eslint-disable-next-line
            getData();
             // eslint-disable-next-line
        };
         // eslint-disable-next-line
    }, []);
    async function getData(){
        const data=await fetch("https://www.panmacmillan.com/page-data/authors/"+id1+"/"+id2+"/"+id3+"/page-data.json");
        const json=await data.json();
        console.log(json.result.data.panMacmillanEdition);
        
        setBook(json.result.data.panMacmillanEdition);
    }
    const dispatch=useDispatch();
    const handleAddItem=(Book)=>{
        //Dispatch an action 
        dispatch(addItems(Book))
    }
    return(
            <span  >

            
            <span><h2 className='id2'>{Book.titleFull}</h2><img  className='card1' alt="card1" src={Book.sourceImagePath} />
            <span className='price'>${Book.workId-9999}</span>
            <button className='button' onClick={()=>handleAddItem(Book)}>Buy</button></span>
            <Review />

        </span>
    )
}

export default BookMenue;