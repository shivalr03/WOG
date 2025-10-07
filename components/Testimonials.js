import testimonials from '../data/testimonials.json';

/**
 * Testimonials section component. Reads testimonials from a local JSON file
 * and renders them in a responsive grid. Each testimonial features a
 * quote along with the reviewer's name and location. You can extend
 * this component to support images in the future.
 */
export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-brand-blue">
          What Our Travelers Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <p className="text-gray-700 italic mb-4">“{test.quote}”</p>
              <p className="font-semibold text-gray-900">
                {test.name}
              </p>
              <p className="text-sm text-gray-500">{test.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}