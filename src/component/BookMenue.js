import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch} from "react-redux"
import {addItems} from '../utils/1appSlice'
import Title from './Title'
const BookMenue=()=>{
    const {id0,id1,id2,id3}=useParams();
    const[Book,setBook]=useState({});
    useEffect(() => {
        return () => {
            getData();
        };
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

            
            <span><h2 className='id2'>{Book.titleFull}</h2><img  className='card1' src={Book.sourceImagePath} />
            <span className='price'>$40</span>
            <button className='button' onClick={()=>handleAddItem(Book)}>Buy</button></span>
            <Title />

        </span>
    )
}

export default BookMenue;