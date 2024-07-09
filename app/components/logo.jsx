// components/Logo.js

const Logo = () => {
    return (
      <header className="relative bg-gradient-to-r from-pink-300 to-pink-400 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div>
            <img src="/logo1.png" alt="Soft and Warm Logo" className="h-12" />
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-wide hover:text-pink-500 transition duration-300">
            Soft and Warm
          </h1>
          <nav className="space-x-6">

            <a href="#about" className="text-white text-lg hover:text-pink-600 transition duration-300">About</a>
            <a href="https://www.instagram.com/softandwarm_/" className="text-white text-lg hover:text-pink-600 transition duration-300">Contact</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Logo;
  