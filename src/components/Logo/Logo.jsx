import logoMain from '../../assets/logo_main.png';
import logoVice from '../../assets/logo_vice.png';
import "./style.css";

const Logo = () => {
    return (
        <div className="logo">
            <img className="logo__main" src={logoMain} alt="logo_main"/>
            <img className="logo__vice" src={logoVice} alt="logo_vice"/>
        </div>
    );
};

export default Logo;