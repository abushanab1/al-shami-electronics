import { motion } from "framer-motion";
import { PhoneCall, Mail } from "lucide-react";

const Contact = () => (
  <section
    id="contact"
    className="min-h-screen bg-background text-primary flex items-center justify-center px-6 py-24"
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl w-full bg-[#0f172a] border border-blue-500/50 p-10 rounded-2xl shadow-[0_0_60px_0_rgba(30,58,138,0.5)] text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-white">Contact Us</h2>
      <p className="mb-10 text-blue-100">We’re ready to assist you with all your electronic repair needs.</p>

      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-center justify-center space-x-4 hover:scale-105 transition-transform">
          <div className="p-3 bg-blue-600 rounded-full shadow-md">
            <PhoneCall size={24} className="text-white" />
          </div>
          <p className="text-lg text-white tracking-wide font-medium">+1 (864) 354-7576</p>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center space-x-4 hover:scale-105 transition-transform">
          <div className="p-3 bg-blue-600 rounded-full shadow-md">
            <Mail size={24} className="text-white" />
          </div>
          <p className="text-lg text-white tracking-wide font-medium">alshamifix@gmail.com</p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Contact;
