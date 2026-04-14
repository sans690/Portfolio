export function Home() {
  return (
    <div className="flex justify-center items-stretch">
      <section id="home" className="section">
        <div className="space-y-2">
          <div className="mx-auto">
            <div className="mb-16 mx-auto max-w-3xl">
              {/* Main flex container for row layout */}
              <div className="flex flex-col items-center justify-center text-center">
                {/* Text content - left side */}
                <div className="flex flex-col gap-2 items-center justify-center flex-1">
                  <div className="text-white text-2xl text-center">I am...</div>
                  <h2 className="text-white text-6xl mb-2 text-center">
                    <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center pb-4">
                      Saniyah Smith
                    </span>
                  </h2>
                  <p className="text text-center">
                    I’m a recent Computer Science grad from the University of
                    Virginia, and I’m passionate about building software and
                    improving user experiences.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a
                      href="#contact"
                      className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 relative overflow-hidden group"
                    >
                      <span className="relative z-10">Contact</span>
                      <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-purple-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                    <a
                      href="#projects"
                      className="px-8 py-3 border border-purple-600 text-purple-400 rounded-lg hover:bg-purple-600/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 relative overflow-hidden group"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
                {/* Image - right side */}
                {/* <div className="profile_image_group lg:shrink-0 mt-8 lg:mt-0">
                  <img src={baby} className="profile_image"></img>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
