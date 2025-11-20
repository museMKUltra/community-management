import './style.css';

const Container = ({leftTop, leftCenter, leftBottom, rightTop, rightBottom}) => {
    return (
        <div className="container">
            <div className="container__left">
                {leftTop}
                {leftCenter}
                {leftBottom}
            </div>
            <div className="container__right">
                {rightTop}
                {rightBottom}
            </div>
        </div>
    );
};

export default Container;