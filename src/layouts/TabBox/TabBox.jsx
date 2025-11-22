import "./style.css";
import {useTabs} from "../../components/Tabs/hooks";

function TabBox({tabs}) {
    const {tabButtons, tabContentComponent} = useTabs({
        tabs,
        buttonClasses: {
            active: "tab-box__button tab-box__button--active",
            default: "tab-box__button tab-box__button--default"
        }
    });

    return (
        <div className="tab-box">
            <div className="tab-box__nav">
                {tabButtons}
            </div>
            <div className="tab-box__content">
                {tabContentComponent}
            </div>
        </div>
    );
}

export default TabBox;