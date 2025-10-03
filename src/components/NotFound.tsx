import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 line-pattern opacity-20"></div>
      </div>

      <div className="text-center relative z-10">
        <h1 className="text-8xl md:text-9xl font-bold aqua-glow mb-6" style={{
          textShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
        }}>
          404
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-dark-50 mb-6">Page Not Found</h2>
        <p className="text-dark-300 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed px-4">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-block aqua-button px-8 py-4 text-lg"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

