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
  const packageName = pkg?.name ?? 'Travel package';
  const destination = pkg?.destination ?? 'Destination to be confirmed';
  const duration = pkg?.duration ?? 'Duration coming soon';
  const images = Array.isArray(pkg?.images) ? pkg.images : [];
  const itinerary = Array.isArray(pkg?.itinerary) ? pkg.itinerary : [];
  const inclusions = Array.isArray(pkg?.inclusions) ? pkg.inclusions : [];
  const exclusions = Array.isArray(pkg?.exclusions) ? pkg.exclusions : [];
  const description = typeof pkg?.description === 'string' ? pkg.description : 'Detailed information will be available soon.';
  const priceLabel = typeof pkg?.price === 'number' ? `₹${pkg.price.toLocaleString()}` : 'Contact us for pricing';

  return (
    <>
      <Head>
        <title>{pkg ? `WOG Travels | ${packageName}` : 'WOG Travels'}</title>
      </Head>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === 'pending' && <p>Loading…</p>}
          {error && <p className="text-red-600">{error.message}</p>}
          {status === 'success' && !pkg && !error && (
            <p className="text-red-600">We couldn't find that travel package. Please browse other options.</p>
          )}
          {pkg && (
            <>
              <h1 className="text-3xl font-semibold mb-4 text-brand-blue">
                {packageName}
              </h1>
              <p className="text-sm text-gray-500 mb-2">
                {destination} • {duration}
              </p>
              {/* Image gallery */}
              {images.length > 0 ? (
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-6">
                  {images.map((img, idx) => (
                    <div key={idx} className="w-full h-64 overflow-hidden rounded-lg shadow">
                      <img
                        src={img}
                        alt={`${packageName} image ${idx + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mb-6 text-gray-500">Image gallery coming soon.</p>
              )}
              {/* Description */}
              <p className="mb-6 text-gray-700 max-w-3xl leading-relaxed">
                {description}
              </p>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-8">
                {/* Itinerary */}
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-brand-red">
                    Itinerary
                  </h2>
                  {itinerary.length > 0 ? (
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      {itinerary.map((day, idx) => (
                        <li key={idx}>{day}</li>
                      ))}
                    </ol>
                  ) : (
                    <p className="text-gray-500">Itinerary details will be shared soon.</p>
                  )}
                </div>
                {/* Inclusions */}
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-brand-red">
                    Inclusions
                  </h2>
                  {inclusions.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {inclusions.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">Inclusion information will be added shortly.</p>
                  )}
                </div>
                {/* Exclusions */}
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-brand-red">
                    Exclusions
                  </h2>
                  {exclusions.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {exclusions.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">Exclusion information will be added shortly.</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-12">
                <span className="text-2xl font-bold text-brand-blue">
                  Price: {priceLabel}
                </span>
                <Link
                  href={pkg.slug ? { pathname: '/contact', query: { package: pkg.slug } } : '/contact'}
                  className="bg-brand-red text-white px-6 py-3 rounded-md shadow hover:bg-brand-red/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-disabled={!pkg.slug}
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