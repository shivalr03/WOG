import Head from 'next/head';
import { useTravelPackages } from '../hooks/useTravelPackages';
import HeroCarousel from '../components/HeroCarousel';
import PackageCard from '../components/PackageCard';
import Testimonials from '../components/Testimonials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking, faUsers, faHiking, faUtensils } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Home() {
  const { data: packages = [], status, error } = useTravelPackages();
  // Pick featured packages; fall back to first three if none flagged
  const featured = packages.filter((p) => p.isFeatured).slice(0, 3);
  const fallbackFeatured = packages.slice(0, 3);
  const slides = [
    {
      image: '/images/hero1.jpg',
      title: 'Discover Your Next Adventure',
      description: 'Explore curated experiences across continents with WOG Travels.',
    },
    {
      image: '/images/hero2.jpg',
      title: 'Unforgettable Journeys',
      description: 'From bustling cities to serene beaches — create memories that last.',
    },
    {
      image: '/images/hero3.jpg',
      title: 'Travel Made Simple',
      description: 'We handle the details so you can focus on the experience.',
    },
  ];

  const categories = [
    {
      name: 'Individual Tours',
      description: 'Find the perfect itinerary tailored to solo travelers or couples.',
      href: '/collections',
      colorClass: 'bg-brand-red',
      icon: faPersonWalking,
    },
    {
      name: 'Group Tours',
      description: 'Travel together with family, friends or colleagues and save.',
      href: '/group-tours',
      colorClass: 'bg-brand-yellow',
      icon: faUsers,
    },
    {
      name: 'Adventure',
      description: 'Conquer mountains and embark on thrilling treks.',
      href: '/collections',
      colorClass: 'bg-brand-green',
      icon: faHiking,
    },
    {
      name: 'Culinary',
      description: 'Taste the world with our bespoke food journeys.',
      href: '/collections',
      colorClass: 'bg-brand-blue',
      icon: faUtensils,
    },
  ];

  return (
    <>
      <Head>
        <title>WOG Travels | Home</title>
        <meta
          name="description"
          content="Experience curated travel with WOG Travels. Browse individual and group tours across the world."
        />
      </Head>
      <HeroCarousel slides={slides} />
      {/* Featured Tours */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-8 text-brand-blue">Featured Tours</h2>
          {status === 'pending' ? (
            <p>Loading packages…</p>
          ) : error ? (
            <p className="text-red-600">Unable to load packages right now. Please try again later.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {(featured.length > 0 ? featured : fallbackFeatured).map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          )}
        </div>
      </section>
      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-8 text-brand-blue">Explore by Category</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className={`flex flex-col items-start p-6 rounded-lg shadow hover:shadow-md transition ${cat.colorClass} text-white`}
              >
                <FontAwesomeIcon icon={cat.icon} size="2x" className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                <p className="text-sm leading-tight">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <Testimonials />
    </>
  );
}