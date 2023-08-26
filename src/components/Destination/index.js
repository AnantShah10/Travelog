import "./index.css";

import DestinationData from "../Destinationdata";

import imgparis1 from "../../assets/paris.jpeg";
import imgparis2 from "../../assets/3.jpg";
import imgbali1 from "../../assets/bali.jpg";
import imgbali2 from "../../assets/8.jpg";

export default function Destination() {
    return (
        <div className="destination">
            <h1>Explore Our Top Destinations</h1>
            <p>Experience the extraordinary in our most sought-after destinations. From captivating cities to serene beaches, these gems promise unforgettable moments. Immerse yourself in diverse cultures, savor new flavors, and create timeless memories. Let the journey begin.</p>
            <DestinationData cname="first-desc" heading="Paris, France" text="Indulge in the romance and elegance of Paris, the City of Love. From the iconic Eiffel Tower to the charming streets of Montmartre, every corner holds a piece of history and art. Savor delectable pastries in sidewalk cafes, explore world-class museums, and cruise along the Seine River as you soak in the beauty that has inspired artists and dreamers for centuries. Paris is more than a destination; it's a tapestry of unforgettable experiences waiting to be woven into your story." img1={ imgparis1 } img2={ imgparis2 }/>
            <DestinationData cname="first-desc-reverse" heading="Bali, Indonesia" text="Escape to the tropical paradise of Bali, where lush landscapes and tranquil beaches create a haven for relaxation and exploration. Immerse yourself in the rich Balinese culture, from intricate temples to vibrant festivals. Lounge on pristine shores, venture into emerald rice terraces, and rejuvenate with holistic wellness practices. Whether you're seeking adventure, serenity, or a perfect blend of both, Bali's breathtaking beauty and warm hospitality will leave an indelible mark on your heart." img1={ imgbali1 } img2={ imgbali2 }/>
        </div>
    )
}