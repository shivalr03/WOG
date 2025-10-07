import { useState, useMemo } from 'react';
import Head from 'next/head';
import { useTravelPackages } from '../../hooks/useTravelPackages';
import PackageCard from '../../components/PackageCard';
import FilterSortBar from '../../components/FilterSortBar';

/**
 * Travel collections page. Displays all available individual packages in
 * a responsive grid with client‑side filtering and sorting by
 * destination, price or popularity. Uses React Query to fetch data
 * from a static JSON file.
 */
export default function CollectionsPage() {
  const { data: packages = [], status } = useTravelPackages();
  const [filterDest, setFilterDest] = useState('');
  const [sort, setSort] = useState('popularity');

  // Extract unique destinations for the filter dropdown
  const destinations = useMemo(() => {
    const set = new Set();
    packages.forEach((p) => set.add(p.destination));
    return Array.from(set);
  }, [packages]);

  // Apply the selected destination filter
  const filtered = useMemo(() => {
    return packages.filter((pkg) => {
      return filterDest ? pkg.destination === filterDest : true;
    });
  }, [packages, filterDest]);

  // Apply sorting logic based on selected sort option
  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sort) {
      case 'priceLowHigh':
        return arr.sort((a, b) => a.price - b.price);
      case 'priceHighLow':
        return arr.sort((a, b) => b.price - a.price);
      case 'popularity':
      default:
        return arr.sort((a, b) => b.popularity - a.popularity);
    }
  }, [filtered, sort]);

  return (
    <>
      <Head>
        <title>WOG Travels | Collections</title>
        <meta
          name="description"
          content="Browse all individual travel packages with filtering and sorting options."
        />
      </Head>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-4 text-brand-blue">
            Travel Collections
          </h1>
          <p className="text-gray-600 mb-6">
            Use the filters below to narrow down your perfect getaway.
          </p>
          <FilterSortBar
            destinations={destinations}
            onFilterChange={setFilterDest}
            onSortChange={setSort}
          />
          {status === 'loading' ? (
            <p>Loading packages…</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {sorted.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}