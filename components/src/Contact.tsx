export function Contact() {
  return (
    <section id="contact" className="section">
      <div className=" mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl mb-5">
            <span className="span">Establish</span> A Connection
          </h2>
          <p className="text-gray-400 mx-auto py-2">
            Have a question, send a message to chat with me!
          </p>
          <div className="flex flex-col items-center justify-center mt-5">
            <div className="w-full h-full min-h-5px max-w-5xl bg-linear-to-br from-purple-950/30 to-black p-8 rounded-xl border border-purple-600/30 shadow-2xl shadow-purple-500/10">
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-2"></div>
                <label className="mb-0 pb-2 text-left text-lg">Your Name</label>
                <input
                  className="mb-0 px-4 py-4 bg-black/50 border border-purple-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-600 "
                  placeholder="Enter your name"
                ></input>
                <div className="flex flex-col space-y-2 pb-4"></div>
                <label className="mb-0 pb-2 text-left text-lg">
                  Email Address
                </label>
                <input
                  className="mb-0 px-4 py-4 bg-black/50 border border-purple-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-600"
                  placeholder="Enter your email address"
                ></input>
                <div className="flex flex-col space-y-2 pb-4"></div>
                <label className="mb-0 pb-2 text-left text-lg">Subject</label>
                <input
                  className="mb-0 px-4 py-4 bg-black/50 border border-purple-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-600"
                  placeholder="What's this message about"
                ></input>
                <div className="flex flex-col space-y-2 pb-4"></div>
                <label className="mb-0 pb-2 text-left text-lg">Message</label>
                <textarea
                  className="mb-6 px-4 py-4 resize-none h-54 bg-black/50 border border-purple-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-600"
                  placeholder="Tell me about what you need"
                ></textarea>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 relative overflow-hidden group"
                >
                  <span className="relative z-10">Submit</span>
                  <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-purple-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
