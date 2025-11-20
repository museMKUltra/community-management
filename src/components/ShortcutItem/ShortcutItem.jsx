import "./style.css";

function ShortcutItem({item}) {
    return (
        <div className="shortcut-item">
            <div className="shortcut-item__icon">
                <img src={`/community-management/icons/icon_${item.icon}.svg`} alt={item.icon}/>
            </div>
            <h3 className="shortcut-item__name">{item.name}</h3>
        </div>
    );
}

export default ShortcutItem;