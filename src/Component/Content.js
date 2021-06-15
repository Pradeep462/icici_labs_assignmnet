import React, {useEffect , useState } from 'react';
import './Content.css';
import Image from './Image';
import Popupforbreed from './Popupforbreed';

const Content = ({dogsData , setDogsData , searchbreed}) => {
    
    const [popupbreedtoggle , setPopupbreedtoggle] = useState(false);
    const [clickedBreed , setClickedBreed] = useState('akita');
   

    const getdogsdata =async () => {
        const dogsdata = await fetch(`https://dog.ceo/api/breeds/list/all`);
        const dogsdatajson = await dogsdata.json();
        setDogsData(dogsdatajson["message"]);
    }

    useEffect(()=>{
        getdogsdata();
        
    },[]);
       const clickHandler = (dog) => {
      
        setPopupbreedtoggle(true);
        setClickedBreed(()=> dog);
    }

    return (
        <div className={`itemContainer `}>
            {
              Object.keys(dogsData).filter(val =>{
                  if(searchbreed === ''){
                      return val;
                  }else if(val.toLocaleLowerCase().includes(searchbreed.toLocaleLowerCase())){
                     return val;
                  }
              }).map(dog => {
                    return <div className="items" onClick={()=>clickHandler(dog)}>
                            <Image  breed={dog}/>
                            {dog } 
                             
                        </div>
                })
            }
            <Popupforbreed popupbreedtoggle={popupbreedtoggle} 
                           setPopupbreedtoggle={setPopupbreedtoggle}
                           clickedBreed={clickedBreed}
                            />
        </div>
    );
};

export default Content;

