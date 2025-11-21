import "./style.css";

function IconButton({icon}) {
    return (
        <button className="icon-button">
            <img src={`/community-management/icons/icon_${icon}.svg`} alt={icon}/>
        </button>
    );
}

export default IconButton;