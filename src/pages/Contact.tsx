import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import VisitFarm from "../components/VisitFarm";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <Layout>
      <PageHero
        image="/farm-tractor.png"
        label="Contact"
        heading="Come Grow With Us"
        subtitle="Reach out for vegetables, fruits, pulses, farm plots or any general enquiry."
      />
      <VisitFarm />
      <ContactSection />
    </Layout>
  );
}
