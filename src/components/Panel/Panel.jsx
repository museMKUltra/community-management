import ControlDisplay from "./ControlDisplay/index.js";
import SettingCategory from "./SettingCategory/index.js";

function Panel({title, displays, categories}) {
    return (
        <>
            <ControlDisplay title={title} list={displays.filter(display => Boolean(display.key))} />
            <SettingCategory list={categories} />
        </>
    );
}

export default Panel;