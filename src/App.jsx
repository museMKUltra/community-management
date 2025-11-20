import './App.css'
import NavBar from "./layouts/NavBar";
import Container from "./layouts/Container";
import Logo from "./components/Logo";
import basic from "./data/basic.json";
import Weather from "./components/Weather";
import MainTitle from "./components/MainTitle";
import SearchInput from "./components/SearchInput";
import SearchBox from "./layouts/SearchBox";

function App() {
    return (
        <>
            <NavBar
                left={
                    <>
                        <Logo/>
                        <Weather list={basic.weather}/>
                    </>
                }
                center={<MainTitle text={basic.title}/>}
                right={<SearchBox time={basic.time} search={<SearchInput />} />}
            />
            <Container
                leftTop={<div>leftTop</div>}
                leftCenter={<div>leftCenter</div>}
                leftBottom={<div>leftBottom</div>}
                rightTop={<div>rightTop</div>}
                rightBottom={<div>rightBottom</div>}
            />
        </>
    )
}

export default App
