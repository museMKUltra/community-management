import "./style.css";

function TabButton({tab, clickTab, styleClass}) {
    return (
        <button className={`tab-button ${styleClass}`} onClick={() => {
            clickTab(tab);
        }}>
            {tab.name}
        </button>
    );
}

export default TabButton;