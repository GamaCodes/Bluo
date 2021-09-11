import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Hero from "../components/BackgroundAsImageWithCenteredContent";
import Features from "../components/VerticalWithAlternateImageAndText";
import Blog from "../components/ThreeColSimpleWithImage.js";
import Testimonial from "../components/TwoColumnWithImage";
import ContactUsForm from "../components/SimpleContactUs";
import Footer from "../components/SimpleFiveColumn";

const Home = () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
    <Blog />
    <Testimonial />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);

export default Home;
