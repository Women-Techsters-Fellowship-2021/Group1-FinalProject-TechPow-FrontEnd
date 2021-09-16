import { useHistory } from 'react-router-dom';

//import styles
import './style.css';

//import icon
import search from '../../resources/icons/search.svg';

function Searchbox() {
    const searchHistory = useHistory();

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        searchHistory.replace(`/search?search=${searchValue.toLowerCase()}`);
    }

    return (
        <div className="search-div">
            <input 
                type="text" 
                name="search" 
                id="search"
                onChange={handleSearch}
                placeholder="Search"
            />
            <img src={search} alt="search" className="xms-icon searchbox-icon" />
        </div>
    );
}

export default Searchbox;