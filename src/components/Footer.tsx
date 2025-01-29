import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-8 py-12 lg:px-16 lg:py-20 bg-black text-white dark:bg-slate-600">
      <div className="flex flex-col md:flex-row justify-between pb-10 border-b border-white mb-10">
        <div className="flex gap-10">
          <div>
            <h3 className="text-lg mb-6 font-semibold">გამოგვყევით:</h3>
            <ul className="text-sm flex flex-col gap-4">
              <a
                href="https://www.facebook.com/hrcgeo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:text-blue-500 transition-colors"
              >
                <FaFacebookF />
                Facebook
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:text-pink-500 transition-colors"
              >
                <FaInstagram />
                Instagram
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:text-blue-400 transition-colors"
              >
                <RiTwitterXFill />X
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:text-blue-700 transition-colors"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-white pt-4">
        <h4 className="text-sm text-gray-300">
          ©{" "}
          <a
            href="https://github.com/AchiGel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Archil Gelashvili
          </a>
        </h4>
      </div>
    </footer>
  );
}
