import './style.css';

function NavBar({left, right, center}) {
    return (
        <div className="nav-bar">
            <div className="nav-bar__left">
                {left}
            </div>
            <div className="nav-bar__center">
                {center}
            </div>
            <div className="nav-bar__right">
                {right}
            </div>
        </div>
    );
}

export default NavBar;