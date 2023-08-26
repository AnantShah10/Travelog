import Hero from "../../components/Hero";
import ContactData from "../../components/Contactdata";

import imgcontact from "../../assets/2.jpg";

export default function Contact() {
    return <>
        <Hero cname="hero-2" heroimage={ imgcontact } title="Let's Connect: Reach Out to Us" text="" />
        <ContactData />
    </>
}