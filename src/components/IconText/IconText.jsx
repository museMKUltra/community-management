import "./style.css";

function IconText({icon, text}) {
    return (
        <div className="icon-text">
            <img src={icon} alt="icon"/>
            <span className="icon-text__text">{text}</span>
        </div>
    );
}

export default IconText;