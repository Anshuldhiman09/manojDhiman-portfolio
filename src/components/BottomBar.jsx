import { Home, Linkedin, Facebook, X, Download, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCircularNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [offset, setOffset] = useState(24); // distance from bottom (default 24px)

  // Show nav after scrolling past Hero
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");
      if (!hero) return;

      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setShowNav(window.scrollY > heroBottom);

      // Check footer collision
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerTop < windowHeight) {
          // nav is overlapping footer → push it up
          const overlap = windowHeight - footerTop;
          setOffset(overlap + 24);
        } else {
          setOffset(24);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const icons = [
    {
      id: "home",
      icon: <Home size={20} />,
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      id: "linkedin",
      icon: <Linkedin size={20} />,
      link: "https://www.linkedin.com/in/manoj-vishwakarma-068a462a9",
    },
    {
      id: "facebook",
      icon: <Facebook size={20} />,
      link: "https://www.facebook.com/manoj.vishkarma.161",
    },
    {
      id: "instagram",
      icon: <Instagram size={20} />,
      link: "https://www.instagram.com/maonj.vishkarma.161",
    },
    {
      id: "cv",
      icon: <Download size={20} />,
      link: "/cv.pdf",
      download: true,
    },
  ];

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.3 }}
          style={{ bottom: offset, right: "1.5rem" }}
          className="fixed z-50 flex items-center justify-center"
        >
          {/* Main Button */}
          <div
            className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 text-white cursor-pointer shadow-lg hover:scale-110 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <img
                src="manoj.jpeg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            )}
          </div>

          {/* Icons sliding out vertically */}
          <AnimatePresence>
            {isOpen &&
              icons.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 0, opacity: 0, scale: 0.5 }}
                  animate={{ y: -(index + 1) * 70, opacity: 1, scale: 1 }}
                  exit={{ y: 0, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="absolute flex items-center justify-center w-14 h-14 rounded-full bg-gray-800 text-white shadow-md cursor-pointer hover:bg-gray-700"
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      {...(item.download ? { download: "manojkumar.pdf" } : {})}
                      target={item.download ? "_self" : "_blank"}
                      rel={item.download ? undefined : "noopener noreferrer"}
                    >
                      {item.icon}
                    </a>
                  ) : (
                    <button onClick={item.action}>{item.icon}</button>
                  )}
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
