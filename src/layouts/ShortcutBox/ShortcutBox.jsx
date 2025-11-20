import "./style.css";
import ShortcutItem, {ShortcutDivider} from "../../components/ShortcutItem";

function ShortcutBox({title, list}) {


    const shortcuts = list.map((item, index) => {
            const isEvenItem = index % 2 == 1;
            const isLastTowItem = index >= list.length - 2;
            const doDividerAppend = isEvenItem && !isLastTowItem;

            return <>
                <ShortcutItem key={item.key} item={item}/>
                {doDividerAppend && (<>
                    <ShortcutDivider/>
                    <ShortcutDivider/>
                </>)}
            </>
        }
    );

    return (
        <div className="shortcut-box">
            <h2 className="shortcut-box__title">{title}</h2>
            <div className="shortcut-box__list">
                {shortcuts}
            </div>
        </div>
    );
}

export default ShortcutBox;