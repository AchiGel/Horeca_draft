import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-16 h-16 shadow shadow-black">
      <div>Logo</div>
      <nav className="flex gap-4">
        <ul className="flex gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
        </ul>
        <button>Log in</button>
        <button>Get Started</button>
      </nav>
    </header>
  );
}
