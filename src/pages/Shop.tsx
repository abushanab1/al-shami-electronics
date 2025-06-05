import {
  PackageCheck,
  ShieldCheck,
  LifeBuoy,
  Smile,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const products = [
  { title: 'IPhone 11', price: 155 },
  { title: 'IPhone 11 PRO', price: 195 },
  { title: 'IPhone 11 PRO MAX', price: 240 },
  { title: 'Iphone 12', price: 185 },
  { title: 'Iphone 12 Pro', price: 285 },
  { title: 'Iphone 12 Pro Max', price: 365 },
  { title: 'Iphone 13', price: 275 },
  { title: 'Iphone 13 Pro', price: 335 },
  { title: 'Iphone 13 Pro Max', price: 475 },
  { title: 'Iphone 14', price: 325 },
  { title: 'Iphone 14 Plus', price: 375 },
  { title: 'iphone 14 Pro', price: 495 },
  { title: 'iPhone 15', price: 485 },
  { title: 'IPhone 15 plus', price: 545 },
  { title: 'iPhone 15 Pro', price: 610 },
  { title: 'iPhone 15 Pro max', price: 715 },
  { title: 'IPHONE 16 PRO', price: 775 },
  { title: 'IPHONE 7', price: 60 },
  { title: 'Iphone 7 Plus', price: 100 },
  { title: 'Iphone SE 2020', price: 85 },
];

// Manual image filename correction for inconsistent mappings
const imageMap: Record<string, string> = {
  'IPhone 11 PRO MAX': 'IPhone11ProMax',
  'Iphone 12': 'IPhone12',
  'Iphone 12 Pro': 'IPhone12Pro',
  'Iphone 12 Pro Max': 'IPhone12ProMax',
  'Iphone 13': 'IPhone13',
  'Iphone 13 Pro': 'IPhone13Pro',
  'IPhone 15 plus': 'IPhone15Plus',
};

const features = [
  { title: 'WORLDWIDE SHIPPING', description: 'Overnight shipping available', icon: PackageCheck },
  { title: 'SAFE PAYMENT', description: '100% secure payment', icon: ShieldCheck },
  { title: '24/7 HELP CENTER', description: 'Dedicated 24/7 support', icon: LifeBuoy },
  { title: 'FRIENDLY SERVICES', description: '90 Days Warranty', icon: Smile },
];

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <section className="bg-beige min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark mb-10">Shop iPhones</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(({ title, price }) => {
            const key = title;
            const imageFile = imageMap[key] || title.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '');
            const image = new URL(`../assets/${imageFile}.png`, import.meta.url).href;

            return (
              <div
                key={title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-contain bg-white p-4"
                />
                <div className="p-4 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
                    <p className="text-gray-700 mb-1">From: ${price.toFixed(2)}</p>
                    <p className="text-green-600 font-medium mb-4">In stock</p>
                  </div>
                  <button
                    onClick={() => addToCart({ title, price, image })}
                    className="bg-primary text-white px-4 py-2 rounded-full w-full transition-transform transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl w-full mx-auto mt-20 bg-[#1e293b] border border-blue-500/50 p-10 rounded-2xl shadow-[0_0_60px_0_rgba(30,58,138,0.5)] text-center"
        >
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
      </div>
    </section>
  );
};

export default Shop;
