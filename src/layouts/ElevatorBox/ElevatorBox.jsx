import "./style.css";
import ElevatorItem from "../../components/ElevatorItem/index.js";

function ElevatorBox({title, list}) {
    return (
        <div className="elevator-box">
            <h2 className="elevator-box__title">{title}</h2>
            <div className="elevator-box__list">
                {list.map(item => <ElevatorItem key={item.key} item={item}/>)}
            </div>
        </div>
    );
}

export default ElevatorBox;