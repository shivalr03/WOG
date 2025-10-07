import Link from 'next/link';

/**
 * Card component representing a single travel package. Displays the
 * primary image along with basic information. On hover the card
 * slightly lifts to indicate interactivity. Clicking on the "View
 * details" link navigates to the package detail page.
 */
export default function PackageCard({ pkg }) {
  const name = pkg?.name ?? 'Travel package';
  const destination = pkg?.destination ?? 'Destination coming soon';
  const description = pkg?.description
    ? `${pkg.description.slice(0, 80)}${pkg.description.length > 80 ? '…' : ''}`
    : 'Description coming soon.';
  const priceLabel = typeof pkg?.price === 'number'
    ? `₹${pkg.price.toLocaleString()}`
    : 'Contact for price';

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <div className="h-40 sm:h-48 w-full overflow-hidden">
        <img
          src={pkg?.images?.[0] || '/images/hero1.jpg'}
          alt={`${name} image`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-semibold mb-1 truncate">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-1">
          {destination}
        </p>
        <p className="text-sm flex-1 text-gray-700 mb-2">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-brand-blue font-bold text-sm sm:text-base">
            {priceLabel}
          </span>
          <Link
            href={pkg?.slug ? `/collections/${pkg.slug}` : '/collections'}
            className="text-brand-red hover:underline text-sm sm:text-base"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}