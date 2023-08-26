import "./index.css";

export default function DestinationData(props) {
    return (
        <div className={props.cname}>
            <div className="desc-text">
                <h2>{ props.heading }</h2>
                <p>{ props.text }</p>
            </div>
            <div className="image">
                <img alt="parisimage" src={ props.img1 } />
                <img alt="parisimage" src={ props.img2 } />
            </div>
        </div>
    )
}