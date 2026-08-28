import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Story from "../components/Story";
import OwnerSection from "../components/OwnerSection";
import AwardsSection from "../components/AwardsSection";
import WhyChooseUs from "../components/WhyChooseUs";

export default function About() {
  return (
    <Layout>
      <PageHero
        image="https://images.pexels.com/photos/19105219/pexels-photo-19105219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
        label="About Us"
        heading="An Established Farm in Punjab"
        subtitle="Years of hands-on farming experience across 50 acres of land in Salodi, Punjab."
      />
      <Story />
      <OwnerSection />
      <AwardsSection />
      <WhyChooseUs />
    </Layout>
  );
}
