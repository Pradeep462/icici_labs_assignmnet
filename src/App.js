import './App.css';
import React , {useState} from 'react';
import Header from "./Component/Header.js";
import SearchByBreed from './Component/SearchByBreed.js';
import Content from './Component/Content.js';
import Popup from './Component/Popup.js';

function App() {
  const [popupcard , setPopupcard] = useState(false);
  const [dogsData , setDogsData] = useState([]);
  const [searchbreed , setSearchbreed] = useState('');


  return (
    <div >
      <Header setPopupcard={setPopupcard}/>
      <Popup popupcard={popupcard} setPopupcard={setPopupcard} dogsData={dogsData}>
                  
             </Popup>
      <SearchByBreed setSearchbreed={setSearchbreed}/>  
      <Content dogsData={dogsData} setDogsData={setDogsData}  searchbreed={searchbreed} />
        
    </div>
  );
}

export default App;
