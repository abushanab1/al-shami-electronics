import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const links = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Device Grading', path: '/device-grading' },
  { label: 'Cart', path: '/cart' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const location = useLocation();
  const { cartItems } = useCart();
  const cartCount = cartItems.length;

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY < 10);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false); // close menu on route change
  }, [location.pathname]);

  const renderLinks = (mobile = false) =>
    links.map(({ label, path }) => (
      <NavLink
        key={path}
        to={path}
        className={({ isActive }) =>
          `relative transition-colors ${
            isActive ? 'text-black font-semibold underline' : 'hover:text-black'
          } ${mobile ? 'text-left text-lg' : ''}`
        }
      >
        {label}
        {label === 'Cart' && cartCount > 0 && (
          <span className="ml-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full inline-flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </NavLink>
    ));

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white text-primary z-50 transition-all duration-300 ${
        atTop ? '' : 'shadow-md border-b border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">
          Al Shami Electronics
        </NavLink>

        <div className="hidden md:flex items-center space-x-6">
          {renderLinks()}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 flex flex-col space-y-4">
          {renderLinks(true)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
