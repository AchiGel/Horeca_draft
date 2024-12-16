export default function Subscribe() {
  return (
    <div className="bg-pattern bg-no-repeat bg-center bg-cover">
      <div className="bg-black/50 flex flex-col md:flex-row justify-between gap-20 px-4 py-8 sm:px-16 sm:py-28 text-white">
        <div>
          <h2 className="text-4xl mb-6">Sign up for our newsletter</h2>
          <span className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </span>
        </div>
        <div>
          <form className="flex items-center gap-4 mb-4">
            <input
              className="p-3 rounded-md w-full"
              type="text"
              placeholder="Enter your email"
            />
            <button className="py-3 px-6 bg-white rounded-md text-black">
              Subscribe
            </button>
          </form>
          <span className="text-xs">
            By clicking Sign Up you're confirming that you agree with our Terms
            and Conditions.
          </span>
        </div>
      </div>
    </div>
  );
}
