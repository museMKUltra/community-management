import "./style.css";
import {useCallback, useEffect, useState} from "react";
import TabButton from "./TabButton";

function Tabs({tabs, styleClasses}) {
    const [tabKey, setTabKey] = useState("");
    const [tabContentComponent, setTabContentComponent] = useState(<></>);

    const updateTab = useCallback(tab => {
        setTabKey(tab.key);
        setTabContentComponent(<>{tab.content}</>);
    });

    const updateTabs = useCallback(() => {
        const hasTab = tabs.length > 0;
        if (!hasTab) {
            return;
        }

        const activeTab = tabs.find(tab => tab.status === "active");
        if (activeTab) {
            updateTab(activeTab);
            return;
        }

        updateTab(tabs[0]);
    }, [tabs]);

    useEffect(updateTabs, []);

    const tabButtons = tabs.map(tab =>
        <TabButton
            key={tab.key}
            tab={tab}
            clickTab={tab => updateTab(tab)}
            getStyle={() => tab.key === tabKey ? styleClasses.active : styleClasses.default }
        />
    );

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