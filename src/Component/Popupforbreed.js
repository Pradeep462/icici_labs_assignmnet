import React, {useEffect ,  useState } from 'react';
import './Popupforbreed.css'

const Popupforbreed = ({popupbreedtoggle , setPopupbreedtoggle , clickedBreed}) => {
    
    const [breeddata , setBreedData] = useState([]);
    const [breedimg , setBreedimg] = useState();

    const getsubBreed =async () => {
        const subbreed = await fetch(`https://dog.ceo/api/breed/${clickedBreed}/list`);
        const subbreedjson = await subbreed.json();
        setBreedData(subbreedjson["message"]);
    }

    const getbreedImg =async () => {
        const breedimg = await fetch(`https://dog.ceo/api/breed/${clickedBreed}/images/random/3`);
        const breedimgjson = await breedimg.json();
        setBreedimg(breedimgjson["message"]);
        
    }

    useEffect(()=>{
       
        getsubBreed();
        getbreedImg();
       
    },[clickedBreed]);

    console.log(breeddata);

    return (popupbreedtoggle) ? (
        <div className="popup-breed">
            <div className="popup-inner-breed">
                <div className="popup-header">
                   <h3 className="popup-heading">{clickedBreed}</h3>
                   <button className="close-popup-btn" onClick={()=>setPopupbreedtoggle(false)}>X</button>
              </div>
              <p>Sub-breeds</p>
              <div className="sub-Breed-container">
              <div className="More-Images-container">
                   {  breeddata.length > 0 ? 
                         
                            breeddata.map((breed , index)=> {
                                return <div className="breed-img-div">
                                             <img className="breed-img" src={`${breedimg[index]}`}  alt="img Loding..."></img>
                                            {breed}
                                     </div>
                              })
                           :  <p>No Sub-Breeds Available</p>
                 
                        }
                    </div> 
                 </div> 
                 <p>More Images</p>
                 <div className="More-Images-container">
                   {
                          breedimg.map(bimg => {
                                return <div className="breed-img-div">
                                         <img className="breed-img" src={`${bimg}`}  alt="img Loding..."></img>
                                    </div>
                            })
                        }
                 </div> 
               
              
            </div>

        </div>
    ) : "";
};

export default Popupforbreed;