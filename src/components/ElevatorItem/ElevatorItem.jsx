import "./style.css";

function ElevatorItem({item}) {
    const hasState = Boolean(item.state);

    return (
        <div className={`elevator-item elevator-item--${hasState ? "primary" : "default"}`}>
            <div className="elevator-item__circle">
                <p className="elevator-item__code">
                    <span className="elevator-item__symbol">{item.symbol}</span>
                    <span className="elevator-item__number">{item.number}</span>
                </p>
            </div>
            <div className="elevator-item__status">
                {hasState &&
                    <img className="elevator-item__state" src={`/community-management/icons/icon_${item.state}.svg`}
                         alt={item.state}/>}
                <span className="elevator-item__floor">{item.floor}</span>
            </div>
        </div>
    );
}

export default ElevatorItem;