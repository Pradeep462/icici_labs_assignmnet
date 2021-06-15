import React, { useState } from 'react';
import './Popup.css'

const Popup = (props) => {
    
    const [inputValue , setInputValue] = useState();
    const [imgtValues , setimgData] = useState([]);
    const [selectValue , setselectValue] = useState('Select a breed');

    const getdogsimg =async () => {
        const imgdata = await fetch(`https://dog.ceo/api/breed/${selectValue}/images/random/${inputValue}`);
        const imgdatajson = await imgdata.json();
        setimgData(imgdatajson["message"]);
        console.log(imgdatajson["message"]);
    }

    const inputHandler = (e) =>{
        setInputValue(e.target.value);
    };

    const selectHandler = (e) =>{
    
        setselectValue(e.target.value);

    };

    

    return (props.popupcard) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-header">
                   <h3 className="popup-heading">Custom Search</h3>
                   <button className="close-btn" onClick={()=>props.setPopupcard(false)}>X</button>
              </div>
              <div className="input-container">
                    <select className="select-box"  onChange={selectHandler} value={selectValue} >
                         
                          {
                              Object.keys(props.dogsData).map(dog => {
                                return <option >
                                       {dog}
                                       
                                     </option>
                            })
                          }
                   </select>
                   <input onChange={inputHandler} className="select-box" placeholder="Number of images"></input>
                  
               </div> 
              <center> <button onClick={getdogsimg} className="get-img-btn">Get Images</button></center>
              
                  <div >
                    <p >Showing {inputValue} images of {selectValue}</p>
                       <div className="img-container">
                        {
                                imgtValues.map(img => {
                                    return <div className="imgdiv">
                                             <img className="popimg" src={img} alt="image loding"/>
                                        </div>
                         })}
                           </div>
                     
                </div>
            </div>

        </div>
    ) : "";
};

export default Popup;