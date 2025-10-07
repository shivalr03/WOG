import Link from 'next/link';

/**
 * Card component representing a single travel package. Displays the
 * primary image along with basic information. On hover the card
 * slightly lifts to indicate interactivity. Clicking on the "View
 * details" link navigates to the package detail page.
 */
export default function PackageCard({ pkg }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <div className="h-40 sm:h-48 w-full overflow-hidden">
        <img
          src={pkg.images?.[0] || '/images/hero1.jpg'}
          alt={pkg.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-semibold mb-1 truncate">
          {pkg.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-1">
          {pkg.destination}
        </p>
        <p className="text-sm flex-1 text-gray-700 mb-2">
          {pkg.description.substring(0, 80)}…
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-brand-blue font-bold text-sm sm:text-base">
            ₹{pkg.price.toLocaleString()}
          </span>
          <Link
            href={`/collections/${pkg.slug}`}
            className="text-brand-red hover:underline text-sm sm:text-base"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}