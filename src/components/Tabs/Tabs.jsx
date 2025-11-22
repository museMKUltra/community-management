import "./style.css";
import {useTabs} from "./hooks";

function Tabs({tabs, buttonClasses}) {
    const {tabButtons, tabContentComponent} = useTabs({tabs, buttonClasses});

    return (
        <div className="tabs">
            <div className="tabs__nav">
                {tabButtons}
            </div>
            <div className="tabs__content">
                {tabContentComponent}
            </div>
        </div>
    );
}

export default Tabs;