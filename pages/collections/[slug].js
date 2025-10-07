import { useRouter } from 'next/router';
import Head from 'next/head';
import { usePackageBySlug } from '../../hooks/useTravelPackages';
import Link from 'next/link';

/**
 * Dynamic route for an individual travel package. Displays a detailed
 * view including an image gallery, itinerary, inclusions, exclusions
 * and pricing. A "Book Now" button links the visitor to the contact
 * page with the package slug passed as a query parameter.
 */
export default function PackageDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { data: pkg, status, error } = usePackageBySlug(slug);

  return (
    <>
      <Head>
        <title>{pkg ? `WOG Travels | ${pkg.name}` : 'WOG Travels'}</title>
      </Head>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === 'loading' && <p>Loading…</p>}
          {error && <p className="text-red-600">{error.message}</p>}
          {pkg && (
            <>
              <h1 className="text-3xl font-semibold mb-4 text-brand-blue">
                {pkg.name}
              </h1>
              <p className="text-sm text-gray-500 mb-2">
                {pkg.destination} • {pkg.duration}
              </p>
              {/* Image gallery */}
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-6">
                {pkg.images.map((img, idx) => (
                  <div key={idx} className="w-full h-64 overflow-hidden rounded-lg shadow">
                    <img
                      src={img}
                      alt={`${pkg.name} image ${idx + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              {/* Description */}
              <p className="mb-6 text-gray-700 max-w-3xl leading-relaxed">
                {pkg.description}
              </p>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-8">
                {/* Itinerary */}
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-brand-red">
                    Itinerary
                  </h2>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700">
                    {pkg.itinerary.map((day, idx) => (
                      <li key={idx}>{day}</li>
                    ))}
                  </ol>
                </div>
                {/* Inclusions */}
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-brand-red">
                    Inclusions
                  </h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {pkg.inclusions.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                </div>
                {/* Exclusions */}
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-brand-red">
                    Exclusions
                  </h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {pkg.exclusions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between mb-12">
                <span className="text-2xl font-bold text-brand-blue">
                  Price: ₹{pkg.price.toLocaleString()}
                </span>
                <Link
                  href={{ pathname: '/contact', query: { package: pkg.slug } }}
                  className="bg-brand-red text-white px-6 py-3 rounded-md shadow hover:bg-brand-red/90 transition"
                >
                  Book Now
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}