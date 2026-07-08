import Hero from "../components/home/Hero";
// import Stats from "../components/home/Stats";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProjects from "../components/home/FeaturedProjects";
// import GalleryPreview from "../components/home/GalleryPreview";
 import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
     
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      {/* <GalleryPreview /> */}
       <Testimonials /> 
      <FAQ />
      <CTA />
    </>
  );
}