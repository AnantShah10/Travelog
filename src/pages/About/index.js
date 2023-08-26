import Hero from "../../components/Hero";
import AboutData from "../../components/Aboutdata";

import imgabout from "../../assets/night.jpg";

export default function About() {
    return <>
        <Hero cname="hero-2" heroimage={ imgabout } title="Our Story: Crafting Journeys, Creating Memories" text="" />
        <AboutData />
    </>
}