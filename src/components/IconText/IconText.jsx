import "./style.css";

function IconText({icon, text, style = ""}) {
    return (
        <div className="icon-text">
            <img src={icon} alt="icon"/>
            <span className={`icon-text__text ${style ? "icon-text__text--" + style : ""}`}>{text}</span>
        </div>
    );
}

export default IconText;