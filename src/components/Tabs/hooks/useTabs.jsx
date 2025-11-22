import {useCallback, useEffect, useState} from "react";
import TabButton from "../TabButton";

const getTabButtons = ({tabs, updateTab, getStyle}) => tabs.map(tab =>
    <TabButton
        key={tab.key}
        tab={tab}
        clickTab={tab => updateTab(tab)}
        styleClass={getStyle(tab)}
    />
);

export default function useTabs({tabs, buttonClasses}) {
    const [tabKey, setTabKey] = useState("");
    const [tabContentComponent, setTabContentComponent] = useState(<></>);

    const updateTab = useCallback(tab => {
        if (tab.key === tabKey) {
            return;
        }
        setTabKey(tab.key);
        setTabContentComponent(<>{tab.content}</>);
    }, [tabKey]);

    const getStyle = useCallback(tab => {
        return tab.key === tabKey ? buttonClasses.active : buttonClasses.default;
    }, [tabKey]);

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

    return {
        tabKey,
        tabButtons: getTabButtons({tabs, updateTab, getStyle}),
        tabContentComponent,
    }
}