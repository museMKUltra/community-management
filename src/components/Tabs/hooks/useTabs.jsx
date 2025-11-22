import {useCallback, useEffect, useState} from "react";
import TabButton from "../TabButton";

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
            getStyle={() => tab.key === tabKey ? buttonClasses.active : buttonClasses.default}
        />
    );

    return {
        tabKey,
        tabButtons,
        tabContentComponent
    }
}