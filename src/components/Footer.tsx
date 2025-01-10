import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/Horeca_logo.png";

export default function Footer() {
  return (
    <footer className="px-8 py-12 lg:px-16 lg:py-20 bg-black text-white dark:bg-slate-600">
      <div className="flex flex-col md:flex-row justify-between pb-20 border-b border-b-white">
        <div className="max-w-lg">
          <Link to="/">
            <div className="flex items-center gap-2 cursor-pointer mb-6">
              <img className="max-w-12" src={logo} alt="logo" />
              <span className="text-2xl">Horeca Georgia</span>
            </div>
          </Link>
          <span className="block mb-6">
            Join our newsletter to stay up to date on features and releases.
          </span>
          <form className="flex items-center gap-4 mb-4">
            <input
              className="p-3 rounded-md bg-transparent border border-white w-full"
              type="text"
              placeholder="Enter your email:"
            />
            <button className="py-3 px-6 rounded-md bg-transparent border border-white">
              Subscribe
            </button>
          </form>
          <span className="text-xs">
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </span>
        </div>
        <div className="flex gap-10">
          <div>
            <h3 className="text-base mb-6">Follow Us:</h3>
            <ul className="text-sm flex flex-col gap-4">
              <a href="https://www.facebook.com/hrcgeo/" target="_blank">
                <li className="flex gap-3 items-center">
                  <FaFacebookF />
                  Facebook
                </li>
              </a>

              <li className="flex gap-3 items-center">
                <FaInstagram />
                Instagram
              </li>
              <li className="flex gap-3 items-center">
                <RiTwitterXFill />X
              </li>
              <li className="flex gap-3 items-center">
                <FaLinkedin />
                LinkedIn
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <h4>
          ©{" "}
          <a
            href="https://github.com/AchiGel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Archil Gelashvili
          </a>
        </h4>
      </div>
    </footer>
  );
}
