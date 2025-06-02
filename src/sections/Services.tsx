import { motion } from "framer-motion";
import {
  Globe,
  Users2,
  Warehouse,
  Scale,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const services = [
  {
    title: "Global Distribution",
    description: "Our expert logistics team ensures seamless mobile product delivery worldwide — fast, efficient, and reliable.",
    icon: Globe,
  },
  {
    title: "Skilled Professionals",
    description: "Our highly trained staff brings years of mobile expertise to deliver precise and personalized solutions.",
    icon: Users2,
  },
  {
    title: "Reliable Inventory",
    description: "We maintain access to millions of high-quality devices, ensuring you always get the stock you need — when you need it.",
    icon: Warehouse,
  },
  {
    title: "Precision Grading",
    description: "Every device undergoes strict quality checks to meet high standards and reduce RMAs — accuracy you can trust.",
    icon: Scale,
  },
  {
    title: "Certified Quality & Warranty",
    description: "Each device passes a 60-point PhoneCheck inspection and includes a 90-day warranty to guarantee peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Partnerships",
    description: "We build lasting relationships by delivering consistent value and dependable service to clients across the globe.",
    icon: Handshake,
  },
];

const Services = () => (
  <section
    id="services"
    className="min-h-screen bg-primary text-white px-6 py-20"
  >
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            <div className="mb-4 text-white flex justify-center">
              <Icon size={36} />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-200">{service.description}</p>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Services;
