import "./style.css";

function TabButton({tab, clickTab, getStyle}) {
    return (
        <button className={`tab-button ${getStyle(tab.key)}`} onClick={() => {
            clickTab(tab);
        }}>
            {tab.name}
        </button>
    );
}

export default TabButton;