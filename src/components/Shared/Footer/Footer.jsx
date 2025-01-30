import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-semibold text-primary">RentHome</h2>
          <p className="mt-2 text-gray-400">
            Find your perfect home with us. Affordable, secure, and reliable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-primary">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Properties
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold text-primary">Contact Us</h3>
          <p className="mt-2 flex items-center gap-2">
            <FaMapMarkerAlt /> Dhaka, Bangladesh
          </p>
          <p className="mt-2 flex items-center gap-2">
            <FaPhone /> +880 123 456 789
          </p>
          <p className="mt-2 flex items-center gap-2">
            <FaEnvelope /> support@renthome.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-primary text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-primary text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary text-2xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} RentHome. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
