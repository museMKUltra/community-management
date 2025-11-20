import "./style.css";
import video from "../../assets/video.png"

function Monitor() {
    return (
        <div className="monitor">
            <img className="monitor__image" src={video} alt="video"/>
        </div>
    );
}

export default Monitor;