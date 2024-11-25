import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/logo.svg";

export default function Footer() {
  return (
    <footer className="px-16 py-20 bg-black text-white">
      <div className="flex justify-between pb-20 border-b border-b-white">
        <div className="max-w-lg">
          <Link to="/">
            <div className="flex items-center gap-2 cursor-pointer mb-6">
              <img src={logo} alt="logo" />
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
            <h3 className="text-base mb-6">About us</h3>
            <ul className="text-sm flex flex-col gap-4">
              <li>Popular</li>
              <li>Trending</li>
              <li>Contact</li>
              <li>Support/Help</li>
              <li>Request Topics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base mb-6">Column two</h3>
            <ul className="text-sm flex flex-col gap-4">
              <li>FAQs</li>
              <li>Terms and Condition</li>
              <li>Support</li>
              <li>Random link</li>
              <li>Random link 2</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base mb-6">Follow Us:</h3>
            <ul className="text-sm flex flex-col gap-4">
              <li className="flex gap-3 items-center">
                <FaFacebookF />
                Facebook
              </li>
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
        <h4>Copyright</h4>
        <div className="flex gap-6">
          <span>text 1</span>
          <span>text 2</span>
          <span>text 3</span>
        </div>
      </div>
    </footer>
  );
}
