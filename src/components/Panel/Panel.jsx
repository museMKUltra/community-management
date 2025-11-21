import ControlDisplay from "./ControlDisplay";
import SettingCategory from "./SettingCategory/index.js";

function Panel({title, displays, categories}) {
    return (
        <>
            <ControlDisplay title={title} list={displays} />
            <SettingCategory list={categories} />
        </>
    );
}

export default Panel;