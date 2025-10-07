import { useQuery } from '@tanstack/react-query';
import packagesData from '../data/travelPackages.json';

/**
 * Custom hook to fetch all travel packages. Currently reads from a
 * static JSON file. The returned query object provides `data`,
 * `status`, `error` and other fields. In the future this hook can be
 * updated to fetch from a remote API without changing consuming
 * components.
 */
export function useTravelPackages() {
  return useQuery({
    queryKey: ['packages'],
    queryFn: async () => {
      // Simulate asynchronous loading. Wrapping the static data in a promise
      // allows React Query to manage the async lifecycle.
      return new Promise((resolve) => {
        setTimeout(() => resolve(packagesData), 300);
      });
    },
  });
}

/**
 * Custom hook to retrieve a single travel package by slug. It depends
 * on the packages query to avoid duplicate data loading. If the slug
 * isn't provided, the query will not run (enabled: false).
 */
export function usePackageBySlug(slug) {
  return useQuery({
    queryKey: ['package', slug],
    queryFn: async () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const found = packagesData.find((p) => p.slug === slug);
          if (!found) {
            reject(new Error('Package not found'));
          } else {
            resolve(found);
          }
        }, 200);
      });
    },
    enabled: !!slug,
  });
}