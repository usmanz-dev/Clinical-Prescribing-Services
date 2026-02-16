import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { SiGlassdoor, SiTiktok } from "react-icons/si";
import {
  ChevronDown,
  Menu,
  X,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const topBarRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  const fadeIn = (element, delay = 0, duration = 0.6) => {
    if (!element) return;
    element.style.opacity = "0";
    element.style.transform = "translateY(10px)";
    element.style.transition = `opacity ${duration}s ease ${delay}s, transform ${duration}s cubic-bezier(0.68, -0.55, 0.27, 1.55) ${delay}s`;
    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, delay * 1000);
  };

  useEffect(() => {
    if (topBarRef.current) fadeIn(topBarRef.current, 0, 0.5);
    if (logoRef.current) fadeIn(logoRef.current, 0.2, 0.6);
    navItemsRef.current.forEach((item, index) => {
      if (item) fadeIn(item, 0.1 * index + 0.4, 0.5);
    });

    const handleScroll = () => setIsScrolled(window.pageYOffset > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown handlers with timeout for smooth interaction
  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // 300ms delay before hiding
  };

  const servicesSubMenu = [
    { name: "Services & Support Overview", path: "/services" },
    {
      name: "Clinical Pharmacist Support Service",
      path: "/services/clinical-pharmacist",
    },
    {
      name: "Primary Care Network Management and Support",
      path: "/services/pcn-management",
    },
    {
      name: "Medicines Optimisation Service",
      path: "/services/medicines-optimisation",
    },
    {
      name: "Pharmacy Technician Support",
      path: "/services/pharmacy-technician",
    },
    {
      name: "GP Practice Pharmacist Support",
      path: "/services/gp-practice-pharmacist",
    },
    {
      name: "Enhanced Access and Extended Access Service",
      path: "/services/enhanced-access",
    },
    {
      name: "Additional Roles Reimbursement Scheme (ARRS)",
      path: "/services/arrs",
    },
    { name: "GP ARRS", path: "/services/gp-arrs" },
    { name: "Remote Prescribing", path: "/services/remote-prescribing" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "shadow-lg bg-white/95 backdrop-blur-md" : "bg-white"
      }`}
      ref={headerRef}
    >
      {/* Top Info Bar */}
      <div
        ref={topBarRef}
        className={`bg-gradient-to-r from-blue-900 to-blue-700 text-white transition-all duration-300 ${
          isScrolled ? "py-1" : "py-2"
        } px-4`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm px-4 sm:px-0 py-2">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:info@clinicalprescribingservices.co.uk"
              className="flex items-center space-x-2 hover:text-blue-300 transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>info@clinicalprescribingservices.co.uk</span>
            </a>
            <a
              href="tel:01274442076"
              className="flex items-center space-x-2 hover:text-blue-300 transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>07961 842 069</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-3 sm:mt-0">
            {[
              {
                Icon: Facebook,
                label: "Facebook",
              },
              {
                Icon: Twitter,
                label: "Twitter",
              },
              {
                Icon: Linkedin,
                label: "LinkedIn",
              },
              {
                Icon: Instagram,
                label: "Instagram",
              },
              {
                Icon: SiTiktok,
                label: "TikTok",
              },
              {
                Icon: SiGlassdoor,
                label: "Glassdoor",
              },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`bg-white transition-all duration-300 ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 cursor-pointer group"
              ref={logoRef}
            >
             
              <div className="relative">
                <img
                  src="https://clinicalprescribingservices.co.uk/wp-content/uploads/2019/05/cropped-CPSLOGOWHITE-1.png"
                  alt="Clinical Prescribing Services Logo"
                  className={`object-contain transition-all duration-300 group-hover:scale-110 ${
                    isScrolled
                      ? "w-16 h-16 sm:w-14 sm:h-14"
                      : "w-16 h-16 sm:w-20 sm:h-20"
                  }`}
                />
              </div>

              <div className="flex flex-col justify-center">
                <h1
                  className={`text-blue-900 font-bold leading-tight transition-all duration-300 group-hover:text-blue-600 ${
                    isScrolled
                      ? "text-sm sm:text-base lg:text-xl"
                      : "text-base sm:text-lg lg:text-lg"
                  }`}
                >
                  Clinical Prescribing Services
                </h1>
                <p
                  className={`text-blue-700 font-medium leading-tight transition-all duration-300 ${
                    isScrolled
                      ? "text-xs sm:text-sm lg:text-base"
                      : "text-sm sm:text-base lg:text-md "
                  }`}
                >
                  Professional Healthcare Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Meet the Team", path: "/meet-the-team" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  ref={(el) => (navItemsRef.current[index] = el)}
                  className={`text-sm xl:text-base font-medium transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                    location.pathname === item.path
                      ? "text-blue-600"
                      : "text-blue-900 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Services Dropdown - Fixed */}
              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  ref={(el) => (navItemsRef.current[3] = el)}
                  className={`flex items-center text-sm xl:text-base font-medium transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                    location.pathname.startsWith("/services")
                      ? "text-blue-600"
                      : "text-blue-900 hover:text-blue-600"
                  }`}
                >
                  Services & Support
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 backdrop-blur-sm transition-all duration-300 ${
                    isServicesOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-2 invisible"
                  }`}
                >
                  {servicesSubMenu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-xs xl:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200  "
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {[
                { name: "Tools", path: "/tools" },
                { name: "Training & Development", path: "/training" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  ref={(el) => (navItemsRef.current[index + 4] = el)}
                  className={`text-sm xl:text-base font-medium transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                    location.pathname === item.path
                      ? "text-blue-600"
                      : "text-blue-900 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-blue-900 hover:text-blue-600 transition-all duration-300 hover:scale-125"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg transform transition-all duration-500 ease-in-out translate-x-0"
          >
            <nav className="px-4 py-4 space-y-3 max-h-[70vh] overflow-y-auto">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Meet the Team", path: "/meet-the-team" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-sm font-medium transition-all duration-300 hover:translate-x-3 py-2 rounded-md hover:bg-blue-50 ${
                    location.pathname === item.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-blue-900 hover:text-blue-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Services Section */}
              <div>
                <button
                  className={`flex items-center justify-between w-full text-sm font-medium transition-all duration-300 hover:translate-x-3 py-2 rounded-md hover:bg-blue-50 ${
                    location.pathname.startsWith("/services")
                      ? "text-blue-600 bg-blue-50"
                      : "text-blue-900 hover:text-blue-600"
                  }`}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services & Support
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2 max-h-64 overflow-y-auto">
                    {servicesSubMenu.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block text-xs text-gray-600 hover:text-blue-600 transition-all duration-200 hover:pl-4 py-1 rounded-md hover:bg-blue-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {[
                { name: "Tools", path: "/tools" },
                { name: "Training & Development", path: "/training" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-sm font-medium transition-all duration-300 hover:translate-x-3 py-2 rounded-md hover:bg-blue-50 ${
                    location.pathname === item.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-blue-900 hover:text-blue-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
