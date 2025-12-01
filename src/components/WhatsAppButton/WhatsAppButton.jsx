import { FaWhatsapp } from "react-icons/fa"; 
import './WhatsAppButton.css'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5493585128166?text=Hola%20quiero%20más%20información"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat en WhatsApp"
    >
      <FaWhatsapp size={40} />
    </a>
  );
}

export default WhatsAppButton;
