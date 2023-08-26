import Hero from "../../components/Hero";
import Destination from "../../components/Destination";
import Trip from "../../components/Trip";

import imghome from "../../assets/12.jpg";

export default function Home() {
    return <>
        <Hero cname="hero" heroimage={ imghome } title="Unleash Your Wanderlust with Personalized Travel Experiences" text="Explore the world on your terms. Our travel planning experts create personalized journeys that match your unique style and interests. From hidden gems to iconic landmarks, every detail is designed with you in mind. Start your adventure today."/>
        <Destination />
        <Trip />
    </>
}