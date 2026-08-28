import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { waLink } from "../lib/whatsapp";

const INTERESTS = ["Vegetables", "Fruits", "Pulses", "Farm Plot", "General Enquiry"];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: INTERESTS[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Mann Organiculture, my name is ${form.name}.\nInterested in: ${form.interest}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(waLink(text), "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", interest: INTERESTS[0], message: "" });
  };

  return (
    <section id="contact-form" className="bg-forest-950 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[900px]">
        <SectionHeading heading="Come Grow With Us" light />

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 grid gap-5 rounded-[26px] bg-cream/[0.05] p-7 sm:grid-cols-2 sm:p-10"
          >
            <div className="sm:col-span-1">
              <label className="text-[13px] font-medium text-cream/70">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-xl border border-cream/20 bg-transparent px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
                placeholder="Your full name"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="text-[13px] font-medium text-cream/70">Phone</label>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-2 w-full rounded-xl border border-cream/20 bg-transparent px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
                placeholder="Your phone number"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-[13px] font-medium text-cream/70">
                What are you interested in?
              </label>
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="mt-2 w-full rounded-xl border border-cream/20 bg-forest-950 px-4 py-3 text-cream focus:border-gold focus:outline-none"
              >
                {INTERESTS.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-[13px] font-medium text-cream/70">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="mt-2 w-full rounded-xl border border-cream/20 bg-transparent px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
                placeholder="Tell us what you're looking for..."
              />
            </div>
            <div className="sm:col-span-2 flex items-center gap-4">
              <button
                type="submit"
                className="rounded-full bg-gold px-8 py-3.5 text-[15px] font-semibold text-forest-950 transition-transform hover:-translate-y-0.5"
              >
                Send Enquiry
              </button>
              {sent && (
                <span className="flex items-center gap-2 text-[14px] text-[#20D66B]">
                  <CheckCircle2 className="h-4 w-4" /> Opening WhatsApp…
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
