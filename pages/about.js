import Head from 'next/head';

/**
 * About page describing the mission, vision and values of WOG. This
 * simple static page helps build trust with prospective customers.
 */
export default function AboutPage() {
  return (
    <>
      <Head>
        <title>WOG Travels | About Us</title>
        <meta
          name="description"
          content="Learn about WOG Travels' mission, vision and values. We craft unforgettable journeys that transform the way you see the world."
        />
      </Head>
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-6 text-brand-blue">About WOG Travels</h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Founded with a passion for exploration, WOG Travels is committed to helping you discover
            the world in a way that is authentic, enriching and sustainable. Our travel experts blend
            local insights with global expertise to design itineraries that go beyond the ordinary.
          </p>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-brand-red">Our Mission</h2>
              <p className="text-gray-700">
                To curate memorable travel experiences that connect people with cultures and
                landscapes around the world while promoting responsible tourism.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-brand-red">Our Vision</h2>
              <p className="text-gray-700">
                To be the most trusted travel partner for explorers seeking meaningful journeys,
                inspiring a global community of conscious travelers.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-brand-red">Our Values</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Integrity and transparency</li>
                <li>Customer‑centric design</li>
                <li>Commitment to sustainability</li>
                <li>Passion for discovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}