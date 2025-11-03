import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
    setEmail('');
  };

  return (
    <section className="py-16 bg-primary-dark dark:bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-5">Subscribe to Our Newsletter</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Stay updated with our latest farming innovations, sustainable practices, and agricultural news.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-5 py-4 rounded text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
          />
          <button
            type="submit"
            className="bg-accent-yellow text-primary-dark px-8 py-4 rounded font-semibold hover:bg-yellow-500 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
