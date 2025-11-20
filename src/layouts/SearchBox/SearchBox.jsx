import "./style.css";
import designLogo from "../../assets/logo_design.png";

function SearchBox({time, search}) {
    return (
        <div className="search-box">
            <div className="search-box__design">
                <span className="search-box__time search-box__date">{time?.date || ""}</span>
                <img src={designLogo} alt="logo_design"/>
            </div>
            <div className="search-box__divider"/>
            <div className="search-box__search">
                <span className="search-box__time search-box__day">{time?.day || ""}</span>
                {search}
            </div>
        </div>
    );
}

export default SearchBox;