import React, {useEffect , useState } from 'react';
import './Image.css';

const Image = ({breed}) => {
    const [image , setImage] = useState("");

    const getDogImg =async () =>{
   
     const dog = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
     const dogjson = await dog.json();
     
     setImage(dogjson["message"]);
    }

    useEffect(()=>{
        getDogImg();
    },[])

    return (
             <div className="imgcontainer">
                 <img src={image} alt="image loding"/>
             </div>
    );
};

export default Image;