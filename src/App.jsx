import './App.css'
import NavBar from "./layouts/NavBar";
import Container from "./layouts/Container";

function App() {
    return (
        <>
            <NavBar
                left={<div>left</div>}
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
