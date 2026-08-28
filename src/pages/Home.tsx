import Layout from "../components/Layout";
import Hero from "../components/Hero";
import LookingForSection from "../components/LookingForSection";
import FeaturedSection from "../components/FeaturedSection";
import WhyChooseUs from "../components/WhyChooseUs";
import NaturalFarming from "../components/NaturalFarming";
import FarmPlotTeaser from "../components/FarmPlotTeaser";
import Story from "../components/Story";
import Gallery from "../components/Gallery";
import InstagramSection from "../components/InstagramSection";
import VisitFarm from "../components/VisitFarm";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <LookingForSection />
      <FeaturedSection
        category="vegetable"
        label="Vegetables"
        heading="Fresh From Our Fields"
        subtitle="Seasonal vegetables grown with care and harvested according to what is naturally available."
        viewAllTo="/vegetables"
        viewAllLabel="View All Vegetables"
        tint="offwhite"
      />
      <FeaturedSection
        category="fruit"
        label="Fruits"
        heading="Naturally Sweet. Fresh From The Farm."
        subtitle="Seasonal fruits harvested as they ripen naturally."
        viewAllTo="/fruits"
        viewAllLabel="View All Fruits"
        tint="cream"
      />
      <FeaturedSection
        category="pulse"
        label="Pulses"
        heading="Wholesome Produce From Our Farm"
        subtitle="Farm-grown pulses, cleaned and prepared close to the source."
        viewAllTo="/pulses"
        viewAllLabel="Explore All Pulses"
        tint="offwhite"
      />
      <WhyChooseUs />
      <NaturalFarming />
      <FarmPlotTeaser />
      <Story />
      <Gallery />
      <InstagramSection />
      <VisitFarm />
      <ContactSection />
    </Layout>
  );
}
