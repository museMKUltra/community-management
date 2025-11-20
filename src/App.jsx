import './App.css'
import NavBar from "./layouts/NavBar";
import Container from "./layouts/Container";
import Logo from "./components/Logo";
import basic from "./data/basic.json";
import Weather from "./components/Weather";
import MainTitle from "./components/MainTitle";
import SearchInput from "./components/SearchInput";
import SearchBox from "./layouts/SearchBox";
import Monitor from "./components/Monitor";
import MonitorBox from "./layouts/MonitorBox";
import ShortcutBox from "./layouts/ShortcutBox";
import shortcut from "./data/shortcut.json";
import ElevatorBox from "./layouts/ElevatorBox";
import elevator from "./data/elevator.json";

function App() {
    return (
        <>
            <NavBar
                left={<> <Logo/> <Weather list={basic.weather}/> </>}
                center={<MainTitle text={basic.title}/>}
                right={<SearchBox time={basic.time} search={<SearchInput/>}/>}
            />
            <Container
                leftTop={<MonitorBox><Monitor/></MonitorBox>}
                leftCenter={<ShortcutBox title={shortcut.title} list={shortcut.list}/>}
                leftBottom={<ElevatorBox title={elevator.title} list={elevator.list}/>}
                rightTop={<div style={{height: "142px"}}>rightTop</div>}
                rightBottom={<div style={{height: "798px"}}>rightBottom</div>}
            />
        </>
    )
}

export default App
