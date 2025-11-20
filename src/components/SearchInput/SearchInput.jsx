import "./style.css";

function SearchInput() {
    return (
        <div className="search-input">
            <img className="search-input__search" src="/community-management/icons/icon_search.svg" alt="search"/>
            <input id="search" className="search-input__input" type="text" placeholder="搜尋"></input>
        </div>
    );
}

export default SearchInput;