import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

/**
 * Floating WhatsApp chat button. When clicked, it opens a WhatsApp chat
 * window with a preset message. Replace the phone number with your
 * customer service number. The button uses Font Awesome for the icon.
 */
export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20I%20am%20interested%20in%20your%20travel%20packages"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-brand-green text-white rounded-full p-4 shadow-lg hover:bg-brand-green/80 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="lg" />
    </a>
  );
}