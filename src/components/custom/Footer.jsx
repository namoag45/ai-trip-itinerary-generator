/**
 * Global footer shown on every page.
 * Uses plain <a> tags so it can live outside <RouterProvider>.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* main content */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">My‑Itinerary</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Your AI‑powered trip planner. Create personalised itineraries in seconds.
          </p>
        </div>

        {/* quick links */}
        <nav className="flex flex-col space-y-2 text-sm md:items-end md:text-right">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/create-trip" className="hover:text-white">Create Trip</a>
          <a href="/my-trips" className="hover:text-white">My Trips</a>
          {/* <a href="/about" className="hover:text-white">About</a>
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms" className="hover:text-white">Terms of Service</a> */}
        </nav>
      </div>

      {/* copyright bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-xs text-gray-500">
          © {year} My‑Itinerary Generator • Built by Naman Agarwal
        </div>
      </div>
    </footer>
  );
}
