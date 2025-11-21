import "./style.css";

function LabelBox({panelLeft, panelRight, labels}) {
    return (
        <div className="label-box">
            <div className="label-box__panel">
                <div className="label-box__panel-left">
                    {panelLeft}
                </div>
                <div className="label-box__panel-right">
                    {panelRight}
                </div>
            </div>
            <div className="label-box__labels">
                {labels}
            </div>
        </div>
    );
}

export default LabelBox;