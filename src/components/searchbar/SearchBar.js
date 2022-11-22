import './searchbar.css'
import SearchIcon from '@material-ui/icons/Search';


const SearchBar = ({ placeholder, data, searchFunc}) => {

    return (
        <div className='search'>

            <div className='searchInput'>
                <input type='text' placeholder={placeholder} onChange={(e) => searchFunc(e)}/>
                {/* <div className='searchIcon'><SearchIcon/></div> */}
            </div>
        </div>
    )
}

export default SearchBar
