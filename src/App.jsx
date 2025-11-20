import './App.css'
import NavBar from "./layouts/NavBar";
import Container from "./layouts/Container";
import Logo from "./components/Logo";
import basic from "./data/basic.json";
import Weather from "./components/Weather";

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
                right={<div>right</div>}
                center={<div>center</div>}
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
