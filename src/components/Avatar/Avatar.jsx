import "./style.css";

function Avatar({avatar}) {
    return (
        <div className="avatar">
            {
                avatar?.image &&
                <img className="avatar__image" src={`/community-management/pictures/${avatar.image}`} alt={avatar.image}/>
            }
            <div className="avatar__info">
                <p>{avatar?.name || ""}</p>
                <p>{avatar?.state || ""}</p>
            </div>
        </div>
    );
}

export default Avatar;