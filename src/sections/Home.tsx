import { motion } from "framer-motion";

const Home = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-background text-primary flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Al Shami Electronics
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-lg md:text-xl text-blue-900"
        >
          Shop Trusted Expertise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mt-8"
        >
          <button
            onClick={scrollToContact}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
          >
            Contact Us
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
