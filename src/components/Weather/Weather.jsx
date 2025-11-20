import "./style.css";
import IconText from "../IconText";

function Weather({list}) {
    let weather = list.map((item) =>
        <IconText
            key={item.key}
            icon={`/community-management/icons/icon_${item.icon}.svg`}
            text={item.text}
            style={item.style}
        />
    );

    return (
        <div className="weather">{weather}</div>
    );
}

export default Weather;