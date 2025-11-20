import './style.css';

const Container = ({leftTop, leftCenter, leftBottom, rightTop, rightBottom}) => {
    return (
        <div className="container">
            <div className="container__left">
                <div>{leftTop}</div>
                <div style={{height: "560px"}}>{leftCenter}</div>
                <div style={{height: "165px"}}>{leftBottom}</div>
            </div>
            <div className="container__right">
                <div style={{height: "142px"}}>{rightTop}</div>
                <div style={{height: "798px"}}>{rightBottom}</div>
            </div>
        </div>
    );
};

export default Container;