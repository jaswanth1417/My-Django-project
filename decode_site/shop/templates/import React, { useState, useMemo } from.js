import React, { useState, useMemo } from "react";

// Menswear Ecommerce - Single-file React component (Tailwind CSS required in the project)
// Default export is the App component. Copy this file into a React app (Vite / Create React App)
// and ensure Tailwind is configured. Replace placeholder images with your product images.

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Classic White Shirt",
    price: 29.99,
    category: "Shirts",
    sizes: ["S", "M", "L", "XL"],
    color: "White",
    image: "https://via.placeholder.com/400x400?text=White+Shirt",
  },
  {
    id: 2,
    title: "Navy Slim Jeans",
    price: 49.99,
    category: "Jeans",
    sizes: ["30", "32", "34", "36"],
    color: "Navy",
    image: "https://via.placeholder.com/400x400?text=Navy+Jeans",
  },
  {
    id: 3,
    title: "Grey Hoodie",
    price: 39.99,
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    color: "Grey",
    image: "https://via.placeholder.com/400x400?text=Grey+Hoodie",
  },
  {
    id: 4,
    title: "Black Chinos",
    price: 44.99,
    category: "Trousers",
    sizes: ["30", "32", "34", "36"],
    color: "Black",
    image: "https://via.placeholder.com/400x400?text=Black+Chinos",
  },
  {
    id: 5,
    title: "Striped Polo",
    price: 24.99,
    category: "Polos",
    sizes: ["S", "M", "L", "XL"],
    color: "Blue",
    image: "https://via.placeholder.com/400x400?text=Striped+Polo",
  },
  {
    id: 6,
    title: "Brown Leather Belt",
    price: 19.99,
    category: "Accessories",
    sizes: ["One Size"],
    color: "Brown",
    image: "https://via.placeholder.com/400x400?text=Leather+Belt",
  },
];

function Header({ cartCount, openCart }) {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-6">
            <a href="#" className="text-2xl font-bold text-gray-800">Decode Fashions</a>
            <nav className="hidden md:flex gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Home</a>
              <a href="#products" className="hover:text-gray-900">Shop</a>
              <a href="#about" className="hover:text-gray-900">About</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              </svg>
              <span className="sr-only">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5">{cartCount}</span>
              )}
            </button>
            <button className="hidden md:inline-flex items-center px-3 py-2 rounded-md border">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Modern menswear — effortless style</h1>
            <p className="mt-4 text-gray-600 max-w-xl">Premium essentials and seasonal pieces for every wardrobe. Clean cuts, high-quality fabrics, and honest prices.</p>
            <div className="mt-6 flex gap-3">
              <a href="#products" className="inline-block px-6 py-3 bg-black text-white rounded-md font-medium">Shop Men</a>
              <a href="#about" className="inline-block px-6 py-3 border rounded-md text-gray-700">Learn More</a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="https://via.placeholder.com/800x500?text=Menswear+Hero" alt="Menswear" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Filters({ categories, category, setCategory, query, setQuery }) {
  return (
    <aside className="bg-white p-4 rounded-md shadow-sm">
      <div>
        <label className="block text-sm font-medium text-gray-700">Search</label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <div className="mt-2 flex flex-wrap gap-2">
          <button onClick={() => setCategory("")} className={`px-3 py-1 rounded-full text-sm border ₹{category === "" ? "bg-gray-900 text-white" : "text-gray-700"}`}>All</button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1 rounded-full text-sm border ₹{category === c ? "bg-gray-900 text-white" : "text-gray-700"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">Neat & minimal UI to keep the shopping flow quick and clean.</div>
    </aside>
  );
}

function ProductCard({ product, onAdd }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm group">
      <div className="aspect-square bg-gray-100">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800">{product.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.category} • {product.color}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-bold">₹{product.price.toFixed(2)}</div>
          <button onClick={() => onAdd(product)} className="px-3 py-1 rounded-md border text-sm">Add</button>
        </div>
      </div>
    </article>
  );
}

function ProductGrid({ products, onAdd }) {
  if (products.length === 0) {
    return <div className="text-center text-gray-500 py-12">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}

function CartDrawer({ open, onClose, items, onRemove, onClear }) {
  const total = items.reduce((s, it) => s + it.price * it.quantity, 0);

  return (
    <div className={`fixed inset-0 z-40 ₹{open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-black/40 transition-opacity ₹{open ? "opacity-100" : "opacity-0"}`} onClick={onClose}></div>
      <aside className={`absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl transform transition-transform ₹{open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Your cart</h2>
            <button onClick={onClose} className="text-gray-600">Close</button>
          </div>

          <div className="mt-4 overflow-y-auto flex-1">
            {items.length === 0 && <div className="text-gray-500">Your cart is empty.</div>}
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="flex items-center gap-3">
                  <img src={it.image} alt={it.title} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-medium">{it.title}</div>
                    <div className="text-sm text-gray-500">{it.quantity} × ₹{it.price.toFixed(2)}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">₹{(it.price * it.quantity).toFixed(2)}</div>
                    <button onClick={() => onRemove(it.id)} className="mt-2 text-sm text-red-600">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-gray-700">
              <span>Subtotal</span>
              <span className="font-semibold">₹{total.toFixed(2)}</span>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 px-4 py-2 bg-black text-white rounded-md">Checkout</button>
              <button onClick={onClear} className="px-4 py-2 border rounded-md">Clear</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default function App() {
  const [products] = useState(SAMPLE_PRODUCTS);
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const categories = useMemo(() => Array.from(new Set(products.map((p) => p.category))), [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = category ? p.category === category : true;
      const matchQuery = query ? (p.title + " " + p.category + " " + p.color).toLowerCase().includes(query.toLowerCase()) : true;
      return matchCategory && matchQuery;
    });
  }, [products, category, query]);

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header cartCount={cart.reduce((s, i) => s + i.quantity, 0)} openCart={() => setCartOpen(true)} />

      <main>
        <Hero />

        <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Filters categories={categories} category={category} setCategory={setCategory} query={query} setQuery={setQuery} />
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Shop</h2>
                <div className="text-sm text-gray-600">{filtered.length} products</div>
              </div>

              <ProductGrid products={filtered} onAdd={(p) => { addToCart(p); setCartOpen(true); }} />
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-12 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold">About Decode Fashions</h3>
            <p className="mt-2 text-gray-600 max-w-2xl">We design clean, wearable menswear with focus on fit and fabric. This frontend is a starter template — connect to any backend or headless CMS to power the product data and checkout.</p>
          </div>
        </section>

        <footer id="contact" className="mt-12 bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} Decode Fashions</div>
            <div className="text-sm">Contact: 7794071417</div>
          </div>
        </footer>
      </main>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} onRemove={removeFromCart} onClear={clearCart} />
    </div>
  );
}
