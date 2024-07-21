import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (event, targetID) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      window.scrollTo({
        top:
          targetElement.offsetTop -
          document.querySelector(".header-area").offsetHeight,
        behavior: "smooth",
      });
      setIsMenuOpen(false); // Close the menu on mobile after clicking a link
    }
  };

  return (
    <header
      className={`header-area ${
        isScrolled ? "scrolled" : ""
      } bg-white shadow fixed w-full z-50`}
    >
      <div className="container max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <a href="/" onClick={(e) => handleScrollToSection(e, "/")}>
            <img
              src="./assets/logo-bg-2 1.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>
        <div className="hidden md:flex">
          <nav className="space-x-4">
            <a
              href="#services"
              className="text-gray-900 hover:text-gray-600"
              onClick={(e) => handleScrollToSection(e, "services")}
            >
              Services
            </a>
            <a
              href="#media"
              className="text-gray-900 hover:text-gray-600"
              onClick={(e) => handleScrollToSection(e, "media")}
            >
              Media
            </a>
            <a
              href="#cases"
              className="text-gray-900 hover:text-gray-600"
              onClick={(e) => handleScrollToSection(e, "cases")}
            >
              Cases
            </a>
            <a
              href="#faq"
              className="text-gray-900 hover:text-gray-600"
              onClick={(e) => handleScrollToSection(e, "faq")}
            >
              FAQ
            </a>
            <a
              href="#contacts"
              className="text-gray-900 hover:text-gray-600"
              onClick={(e) => handleScrollToSection(e, "contacts")}
            >
              Contacts
            </a>
          </nav>
        </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="tel:+910000000000"
            className="text-green-600 hover:text-gray-600"
          >
            +91 0000000000
          </a>
          <a
            href="mailto:demo@gmail.com"
            className="text-green-600 hover:text-gray-600"
          >
            demo@gmail.com
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <a
              href="#services"
              className="text-gray-900 hover:text-gray-600"
              onClick={(e) => handleScrollToSection(e, "services")}
            >
              Services
            </a>
            <a
              href="#media"
              className="text-gray-900 hover:text-gray-600"
              onClick={(e) => handleScrollToSection(e, "media")}
            >
              Media
            </a>
            <a
              href="#cases"
              className="text-gray-900 hover:text-gray-600"
              onClick={(e) => handleScrollToSection(e, "cases")}
            >
              Cases
            </a>
            <a
              href="#faq"
              className="text-gray-900 hover:text-gray-600"
              onClick={(e) => handleScrollToSection(e, "faq")}
            >
              FAQ
            </a>
            <a
              href="#contacts"
              className="text-gray-900 hover:text-gray-600"
              onClick={(e) => handleScrollToSection(e, "contacts")}
            >
              Contacts
            </a>
            <div className="flex flex-col space-y-2">
              <a
                href="tel:+910000000000"
                className="text-green-600 hover:text-gray-600"
              >
                +91 0000000000
              </a>
              <a
                href="mailto:demo@gmail.com"
                className="text-green-600 hover:text-gray-600"
              >
                demo@gmail.com
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
