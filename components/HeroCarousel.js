import { useState, useEffect } from 'react';

/**
 * A simple fade‑in/out image carousel. It accepts an array of slides
 * where each slide has an `image`, `title` and `description`. The
 * carousel automatically transitions every 5 seconds. You can extend
 * this component later to add arrows or indicators.
 */
export default function HeroCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const safeSlides = Array.isArray(slides) ? slides : [];
  const slideCount = safeSlides.length;

  // Rotate through slides every 5 seconds
  useEffect(() => {
    if (slideCount <= 1) {
      setIndex(0);
      return;
    }
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slideCount);
    }, 5000);
    return () => clearInterval(id);
  }, [slideCount]);

  if (slideCount === 0) return null;

  return (
    <div className="relative h-96 sm:h-[500px] w-full overflow-hidden">
      {safeSlides.map((slide, i) => (
        <div
          key={i}
          className={
            `absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`
          }
        >
          <img
            src={slide.image}
            alt={slide.title || `Slide ${i + 1}`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-3xl sm:text-5xl font-bold mb-2 drop-shadow-md">
              {slide.title}
            </h2>
            <p className="text-base sm:text-lg max-w-xl">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}