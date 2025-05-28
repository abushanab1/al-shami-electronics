import { motion } from "framer-motion";
import {
  Phone,
  Laptop2,
  Cpu,
  HardDrive,
  BatteryCharging,
  FolderSearch,
} from "lucide-react";

const services = [
  {
    title: "Phone Repair",
    description: "Cracked screens, charging issues, water damage and more.",
    icon: Phone,
  },
  {
    title: "Laptop Troubleshooting",
    description: "Slow performance, blue screens, overheating fixes.",
    icon: Laptop2,
  },
  {
    title: "Circuit Diagnostics",
    description: "Component-level analysis for custom boards and devices.",
    icon: Cpu,
  },
  {
    title: "Custom Builds",
    description: "High-performance PC builds tailored to your needs.",
    icon: HardDrive,
  },
  {
    title: "Data Recovery",
    description: "Recover lost data from corrupted drives and storage.",
    icon: FolderSearch,
  },
  {
    title: "Battery Replacement",
    description: "Extend device life with efficient battery swaps.",
    icon: BatteryCharging,
  },
];

const Services = () => (
  <section
    id="services"
    className="min-h-screen bg-primary text-white px-6 py-20"
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-12">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="mb-4 text-white">
                <Icon size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-200">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
