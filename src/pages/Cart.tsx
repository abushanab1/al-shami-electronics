// src/pages/Cart.tsx
import { useCart } from "../context/CartContext";
// import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="bg-beige min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark mb-10">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain bg-white rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-dark">{item.title}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.title)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Remove from Cart
                </button>
              </div>
            ))}

            <div className="text-right text-lg font-semibold text-dark pt-4 border-t">
              Total: ${total.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
