import "./index.css";

export default function Hero(props) {
    return (
        <>
            <div className={props.cname}>
                <img alt="Heroimg" src={props.heroimage} />
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    )
}