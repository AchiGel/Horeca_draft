import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-16 py-20 bg-black text-white">
      <div className="flex justify-between pb-20 border-b border-b-white">
        <div className="max-w-lg">
          <div>Logo</div>
          <span>
            Join our newsletter to stay up to date on features and releases.
          </span>
          <form>
            <input type="text" placeholder="Enter your email:" />
            <button>Subscribe</button>
          </form>
          <span>
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
