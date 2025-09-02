import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <section className="section" id="contact">
      <div className="container-lg text-center">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let's build something great together</p>

        {/* Buttons with gap */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          {/* Redirect button */}
          <button
            onClick={() => navigate("/contact-form")}
            className="btn px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Contact Me
          </button>

          {/* Download CV button */}
          <a
            href="/manojkumar.pdf" // file inside /public
            download
            className="btn px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition inline-block"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
