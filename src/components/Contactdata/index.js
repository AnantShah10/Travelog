import "./index.css";

export default function AboutData() {
    return (
        <div className="form-container">
            <h1>Got travel questions or a burning desire to explore? We're here. At Travelog, communication is key to exceptional travel. Reach out and start a conversation that could lead to your next unforgettable journey.</h1>
            <div>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Subject" />
                <textarea placeholder="Message" rows="4" />
                <button> Send Message </button>
            </div>
        </div>
    )
}