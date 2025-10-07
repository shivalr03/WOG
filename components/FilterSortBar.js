/**
 * Filter and sorting bar for the collections page. It exposes
 * callbacks for when the user changes the selected destination or
 * sorting order. Destinations are provided as a list of unique
 * strings.
 */
export default function FilterSortBar({ destinations, onFilterChange, onSortChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 border-b border-gray-200 mb-6">
      <div className="flex items-center gap-2">
        <label htmlFor="destination-filter" className="text-sm font-medium">
          Destination:
        </label>
        <select
          id="destination-filter"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="">All</option>
          {destinations.map((dest) => (
            <option key={dest} value={dest}>
              {dest}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm font-medium">
          Sort by:
        </label>
        <select
          id="sort"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="popularity">Popularity</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}