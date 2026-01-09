import { Contact } from "./Contact";
import { Navigation } from "./Navigation";
import { Home } from "./Home";
import { About } from "./About";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-black relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none">
          {/* Particles */}
          <div className="absolute inset-0 bg-linear-to-b from-purple-950/20 via-black to-black"></div>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-500 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>
        <Navigation />
        <Home />
        <About />
        <Contact />
      </div>
    </>
  );
}
