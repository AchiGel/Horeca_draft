export default function Subscribe() {
  return (
    <div className="bg-pattern bg-no-repeat bg-center bg-cover flex justify-between px-16 py-28 text-white">
      <div>
        <h2>Sign up for our newsletter</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
        <span>
          By clicking Sign Up you're confirming that you agree with our Terms
          and Conditions.
        </span>
      </div>
    </div>
  );
}
