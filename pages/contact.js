import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { usePackageBySlug } from '../hooks/useTravelPackages';

/**
 * Contact page. When accessed directly, displays a generic contact form. If
 * accessed with a `package` query parameter, shows details of the
 * selected travel package and treats the form as a booking enquiry for
 * that package. Upon submission a success message is displayed.
 */
export default function ContactPage() {
  const router = useRouter();
  const { package: packageSlug } = router.query;
  const { data: pkg } = usePackageBySlug(packageSlug);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Send form data to API in a real application
  }

  return (
    <>
      <Head>
        <title>WOG Travels | Contact Us</title>
        <meta
          name="description"
          content="Get in touch with WOG Travels. Send us a message about your travel plans or request a booking."
        />
      </Head>
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-4 text-brand-blue">
            {pkg ? 'Book Your Trip' : 'Contact Us'}
          </h1>
          {pkg && (
            <div className="mb-6 p-4 border-l-4 border-brand-red bg-white shadow rounded">
              <h2 className="text-xl font-semibold mb-2 text-brand-red">
                You are booking: {pkg.name}
              </h2>
              <p className="text-gray-600">
                Destination: {pkg.destination} | Duration: {pkg.duration} | Price: ₹{pkg.price.toLocaleString()}
              </p>
            </div>
          )}
          {submitted ? (
            <p className="text-green-700 font-semibold">
              Thank you for reaching out! We will contact you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder={pkg ? `I would like to book the ${pkg.name} package.` : 'How can we help you?'}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-brand-red text-white px-6 py-3 rounded-md shadow hover:bg-brand-red/90 transition"
              >
                {pkg ? 'Submit Booking Request' : 'Send Message'}
              </button>
            </form>
          )}
          <div className="mt-8 text-gray-700">
            <p className="mb-2">
              Prefer to talk directly? Reach us via the channels below:
            </p>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:info@wogtravels.com" className="text-brand-blue hover:underline">info@wogtravels.com</a></li>
              <li>Phone: <a href="tel:+919876543210" className="text-brand-blue hover:underline">+91 98765 43210</a></li>
              <li>WhatsApp: <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Chat on WhatsApp</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}