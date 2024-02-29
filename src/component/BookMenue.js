import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
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
    return(
        <div>
            
            <img src={Book.sourceImagePath} />
            <h2>{id2}</h2>

        </div>
    )
}

export default BookMenue;