export function Contact() {
  return (
    <section
      id="contact"
      className="py-4 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-black via-purple-950/10 to-black relative z-10"
    >
      <div className=" mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl mb-5">
            <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Establish
            </span>{" "}
            A Connection
          </h2>
          <p className="text-gray-400 mx-auto py-2">
            Have a question, send a message to chat with me!
          </p>
          <div className="flex flex-col items-center justify-center mt-5">
            <div className="w-full h-full min-h-5px max-w-2xl bg-linear-to-br from-purple-950/30 to-black p-8 rounded-xl border border-purple-600/30 shadow-2xl shadow-purple-500/10">
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-2"></div>
                <label className="mb-0 pb-2 text-left text-lg">Your Name</label>
                <input
                  className="mb-0 px-4 py-4 bg-black/50 border border-purple-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-600"
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

                <button className="w-full px-6 py-4 rounded-lg bg-linear-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-[1.02] relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width-2
                      stroke-linecap-round
                      stroke-linejoin-round
                      className="lucide lucide-send"
                      data-fg-buk243="1.17:87.26:/components/Contact.tsx:116:19:5275:18:e:Send::::::B5u2"
                    >
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                    Submit
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
