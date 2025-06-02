import { motion } from "framer-motion";
import { PhoneCall, Mail, PackageCheck, ShieldCheck, LifeBuoy, Smile } from "lucide-react";

const features = [
  {
    title: "WORLDWIDE SHIPPING",
    description: "Overnight shipping available",
    icon: PackageCheck,
  },
  {
    title: "SAFE PAYMENT",
    description: "100% secure payment",
    icon: ShieldCheck,
  },
  {
    title: "24/7 HELP CENTER",
    description: "Dedicated 24/7 support",
    icon: LifeBuoy,
  },
  {
    title: "FRIENDLY SERVICES",
    description: "90 Days Warranty",
    icon: Smile,
  },
];

const Contact = () => (
<section
  id="contact"
  className="min-h-screen bg-background text-primary flex flex-col items-center justify-center px-6 py-24"
>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl w-full bg-[#1e293b] border border-blue-500/50 p-10 rounded-2xl shadow-[0_0_60px_0_rgba(30,58,138,0.5)] text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-white">Contact Us</h2>
      <p className="mb-10 text-blue-100">
        We’re ready to assist you with all your electronic repair needs.
      </p>

      <div className="space-y-6 mb-12">
        <div className="flex items-center justify-center space-x-4 hover:scale-105 transition-transform">
          <div className="p-3 bg-blue-600 rounded-full shadow-md">
            <PhoneCall size={24} className="text-white" />
          </div>
          <p className="text-lg text-white tracking-wide font-medium">
            +1 (864) 354-7576
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4 hover:scale-105 transition-transform">
          <div className="p-3 bg-blue-600 rounded-full shadow-md">
            <Mail size={24} className="text-white" />
          </div>
          <p className="text-lg text-white tracking-wide font-medium">
            alshamifix@gmail.com
          </p>
        </div>
      </div>

      {/* Embedded Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white mt-10">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/5 p-5 rounded-xl border border-blue-600/30 hover:scale-105 transition-all"
            >
              <div className="mb-3 flex justify-center text-blue-300">
                <Icon size={28} />
              </div>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  </section>
);

export default Contact;
