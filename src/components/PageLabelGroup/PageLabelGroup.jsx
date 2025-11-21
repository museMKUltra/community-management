import "./style.css";
import PageLabel from "../PageLabel/index.js";

function PageLabelGroup({list}) {
    const labels = list
        .filter(item => Boolean(item.key))
        .map(item => <PageLabel key={item.key} item={item}/>);
    const countOfLabelEachRow = Math.ceil(labels.length / 2);

    return (
        <div className="page-label-group">
            <div className="page-label-group__row1">{labels.slice(0, countOfLabelEachRow)}</div>
            <div className="page-label-group__row2">{labels.slice(countOfLabelEachRow)}</div>
        </div>
    );
}

export default PageLabelGroup;