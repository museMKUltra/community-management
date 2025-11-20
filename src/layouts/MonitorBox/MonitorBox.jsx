import "./style.css";
import video from "../../assets/video.png"

function MonitorBox({ children }) {
    return (
        <div className="monitor-box">
            {children}
        </div>
    );
}

export default MonitorBox;