import { useState } from 'react';
import Head from 'next/head';

/**
 * Group tours page aimed at large families, corporate clients, schools and
 * groups of friends. It highlights the benefits of group travel and
 * presents a form to request a custom quote. The form collects
 * group‑specific details and displays a success message after
 * submission. No data is persisted in this demo.
 */
export default function GroupToursPage() {
  const [form, setForm] = useState({
    groupSize: '',
    groupType: '',
    preferredDestinations: '',
    startDate: '',
    endDate: '',
    specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // In a real application you would send the form data to an API here
  }

  return (
    <>
      <Head>
        <title>WOG Travels | Group Tours</title>
        <meta
          name="description"
          content="Plan your perfect group getaway with WOG Travels. Custom itineraries for families, corporate retreats, schools and more."
        />
      </Head>
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-4 text-brand-blue">
            Group Tours
          </h1>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Whether you’re planning a corporate retreat, a school excursion or a family reunion, our group
            tours are designed to deliver memorable experiences with the benefits of group pricing. Enjoy
            customised itineraries, dedicated support and curated activities tailored to your group’s
            interests.
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700">
            <li>Volume discounts for large groups</li>
            <li>Dedicated travel consultant to handle logistics</li>
            <li>Customisable itineraries and activities</li>
            <li>Flexible payment plans available</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4 text-brand-red">
            Get a Custom Quote
          </h2>
          {submitted ? (
            <p className="text-green-700 font-semibold">
              Thank you for your enquiry! Our team will get back to you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
              <div>
                <label htmlFor="groupSize" className="block text-sm font-medium mb-1">
                  Group Size
                </label>
                <input
                  type="number"
                  id="groupSize"
                  name="groupSize"
                  min="1"
                  value={form.groupSize}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="groupType" className="block text-sm font-medium mb-1">
                  Group Type
                </label>
                <select
                  id="groupType"
                  name="groupType"
                  value={form.groupType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  required
                >
                  <option value="">Select type</option>
                  <option value="family">Family</option>
                  <option value="corporate">Corporate</option>
                  <option value="school">School/College</option>
                  <option value="friends">Friends</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="preferredDestinations" className="block text-sm font-medium mb-1">
                  Preferred Destinations
                </label>
                <input
                  type="text"
                  id="preferredDestinations"
                  name="preferredDestinations"
                  value={form.preferredDestinations}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="e.g. Bali, Tokyo, Paris"
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="startDate" className="block text-sm font-medium mb-1">
                    Travel Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="endDate" className="block text-sm font-medium mb-1">
                    Travel End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={form.endDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium mb-1">
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows="4"
                  value={form.specialRequests}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="Let us know any special requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-brand-red text-white px-6 py-3 rounded-md shadow hover:bg-brand-red/90 transition"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}