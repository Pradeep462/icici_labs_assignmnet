
import './SearchByBreed.css';

const SearchByBreed = (props) => {
  
 
    
    return (
        <div className="search">
            <input className="input-area" 
            onChange={e=>{props.setSearchbreed(e.target.value)}} 
            placeholder="Type here to filter by breed" />

        </div>
    );
};

export default SearchByBreed;