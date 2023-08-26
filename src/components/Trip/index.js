import "./index.css";

import TripData from "../Tripdata";

import imgtrip1 from "../../assets/greece.jpg";
import imgtrip2 from "../../assets/japan.jpg";
import imgtrip3 from "../../assets/peru.jpeg";

export default function Trip() {
    return (
        <div className="trip">
            <h1>Journey with Us: Recent Escapes and Adventures</h1>
            <p>Relive the magic of our recent journeys and be transported to the captivating landscapes and cultures we've had the privilege to explore. From breathtaking vistas to immersive encounters, our recent trips paint stories of discovery, connection, and wanderlust fulfilled. Join us as we share these remarkable experiences and inspire your next adventure. Let the past fuel your dreams for the future.</p>
            <div className="tripcard">
                <TripData tripimage={imgtrip1} heading="Santorini, Greece" text="Escape to the enchanting island of Santorini, Greece, where whitewashed buildings contrast against the brilliant blue of the Aegean Sea. Explore picturesque villages perched on cliffs, wander through narrow streets adorned with bougainvillaea, and witness unforgettable sunsets over the caldera. Immerse yourself in the rich history, savor Mediterranean flavors, and discover a world where ancient charm meets modern luxury." />
                <TripData tripimage={imgtrip2} heading="Kyoto, Japan" text="Embark on a cultural journey to Kyoto, Japan, where timeless traditions harmonize with modern life. Explore serene temples nestled in lush gardens, witness the delicate beauty of cherry blossoms, and partake in the elegance of a traditional tea ceremony. As you stroll through historic districts, each step uncovers the layers of Japan's heritage. Kyoto is a destination that captures the essence of both tranquility and vitality." />
                <TripData tripimage={imgtrip3} heading="Machu Picchu, Peru" text="Discover the awe-inspiring wonder of Machu Picchu, Peru, a testament to the ancient Incan civilization. Trek through the Andes to reach this breathtaking archaeological site nestled amidst misty mountains. Explore the intricately carved stone structures and marvel at the ingenuity that created this hidden citadel. With its mystical aura and panoramic vistas, Machu Picchu offers a glimpse into a world shrouded in history and mystery." />
            </div>
        </div>
    )
}