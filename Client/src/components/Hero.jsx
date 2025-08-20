const Hero = () => {
  return (
      <div className="min-h-screen bg-white text-gray-800">
      {/* Header
      <header className="flex justify-between items-center px-8 py-6 shadow-md">
        <h1 className="text-2xl font-bold text-indigo-600">ParikhitTech</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">Features</a>
          <a href="#" className="hover:text-indigo-600">Pricing</a>
          <a href="#" className="hover:text-indigo-600">Contact</a>
        </nav>
        <button className="md:hidden p-2">☰</button>
      </header> */}

      {/* Hero */}
      
  
      <section className="text-center py-18 px-6 bg-gradient-to-b from-indigo-50 to-white">
        <div className="flex justify-end items-center px-8 py-1 -mt-1">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
             Get Started
       </button> 
        </div>
   
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Build Smarter, Faster</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          A modern solution for building beautiful web apps with speed and simplicity.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">Get Started</button>
          <button className="bg-gray-200 px-6 py-3 rounded-full hover:bg-gray-300 transition">Learn More</button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us</h3>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="text-4xl text-indigo-600 mb-4">⚡</div>
            <h4 className="font-semibold text-lg mb-2">Lightning-Fast Ticket Booking </h4>
            <p className="text-gray-600">Experience seamless and speedy ticket booking with enhanced performance and reliability.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-indigo-600 mb-4">🔒</div>
            <h4 className="font-semibold text-lg mb-2">Global Availability</h4>
            <p className="text-gray-600">Accessible in over 100 countries, so you can book from almost anywhere in the world.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-indigo-600 mb-4">🚀</div>
            <h4 className="font-semibold text-lg mb-2">All Regional Movies Included</h4>
            <p className="text-gray-600">From Hollywood to Bollywood to Tollywood — we’ve got all your favorites covered.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ParikhitTech. All rights reserved.
      </footer>
    </div>
    
  );
};

export default Hero;