import "./style.css";

function SettingCategory({list}) {
    const categories = list.map((item) =>
        <button className="setting-category__item" key={item.key}>
            {item.name}
        </button>
    );

    return (
        <div className="setting-category">
            {categories}
        </div>
    );
}

export default SettingCategory;