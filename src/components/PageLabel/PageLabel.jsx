import "./style.css";

function PageLabel({item}) {
    return (
        <button className="page-label">
            <img src={`/community-management/icons/icon_bar.svg`} alt="icon_bar"/>
            <span className="page-label__text">{item.name}</span>
        </button>
    );
}

export default PageLabel;