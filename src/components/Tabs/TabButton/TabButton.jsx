import "./style.css";

function TabButton({tab, clickTab}) {
    return (
        <button className="tab-button" onClick={() => {
            clickTab(tab);
        }}>
            {tab.name}
        </button>
    );
}

export default TabButton;