import {
  Github,
  Instagram,
  Linkedin,
  AtSign,
  Facebook,
  Mail,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      id: "gmail",
      icon: <Mail size={20} />,
      link: "mailto:manojvishwakarma05891@gmail.com",
    },
    {
      id: "linkedin",
      icon: <Linkedin size={20} />,
      link: "https://www.linkedin.com/in/manoj-vishwakarma-068a462a9",
    },
    {
      id: "instagram",
      icon: <Instagram size={20} />,
      link: "https://www.instagram.com/maonj.vishkarma.161",
    },
    {
      id: "facebook",
      icon: <Facebook size={20} />,
      link: "https://www.facebook.com/manoj.vishkarma.161",
    },
    {
      id: "github",
      icon: <Github size={20} />,
      link: "https://github.com/yourusername", // add your GitHub
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-slate-400 py-12 mt-16 border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; 2024 Anshul Dhiman. All rights reserved.</p>
          <p className="text-xs text-slate-500 mt-1">
            Designed & Developed by{" "}
            <span className="text-white font-medium">Anshul Dhiman </span>
          </p>
          {/* Portfolio Link */}
          <p className="text-xs mt-1">
            <a
              href="https://anshuldhiman.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition"
            >
              Visit My Portfolio
            </a>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="text-sm text-slate-400 hover:text-white transition"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
