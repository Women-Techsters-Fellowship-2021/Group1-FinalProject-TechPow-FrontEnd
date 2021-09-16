import { useHistory } from 'react-router-dom';

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
        </div>
    );
}

export default Searchbox;