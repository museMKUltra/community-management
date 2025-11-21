import "./style.css";

function ControlDisplay({title, list}) {
    const displays = list.map((item) => <>
        <button className="control-display__item" key={item.key}>
            {item.name}
        </button>
    </>);

    return (
        <div className="control-display">
            <h2 className="control-display__title">
                {title}
            </h2>
            <div className="control-display__list">
                {displays}
            </div>
        </div>
    );
}

export default ControlDisplay;