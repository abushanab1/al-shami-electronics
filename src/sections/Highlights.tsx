import { PackageCheck, ShieldCheck, LifeBuoy, Smile } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
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

const Highlights = () => {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 text-white p-6 rounded-xl border border-white/20 backdrop-blur-md shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="mb-4 flex justify-center">
                <Icon size={32} />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Highlights;
