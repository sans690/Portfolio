import { useEmailSubmit } from "../EmailHandling";

export function Contact() {
  const { handleSubmit, isSending, statusMessage, statusType } =
    useEmailSubmit();

  return (
    <section id="contact" className="section">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl mb-5">
            <span className="span">Establish</span> A Connection
          </h2>
          <p className="text-gray-400 mx-auto py-2">
            Have a question, send a message to chat with me!
          </p>

          {/* Main flex container */}
          <form
            className="flex flex-col items-center justify-center mt-5"
            onSubmit={handleSubmit}
          >
            <div className="w-full h-full min-h-5px max-w-5xl bg-linear-to-br from-purple-950/30 to-black p-8 rounded-xl border border-purple-600/30 shadow-2xl shadow-purple-500/10">
              <div className="flex flex-col space-y-2">
                {/* Name and Email in a row */}
                <div className="flex flex-col md:flex-row gap-6">
                  {/* 1st input form */}
                  <div className="flex flex-col space-y-2 flex-1">
                    <label
                      htmlFor="name"
                      className="label text-left text-white"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="px-4 py-4 bg-black/50 border border-purple-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-600"
                      placeholder="Enter your name"
                    />
                  </div>
                  {/* 2nd input form */}
                  <div className="flex flex-col space-y-2 flex-1">
                    <label
                      htmlFor="email"
                      className="label text-left text-white"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="px-4 py-4 bg-black/50 border border-purple-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-600"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                {/* 3rd input form */}
                <div className="flex flex-col space-y-2 pb-4">
                  <label
                    htmlFor="subject"
                    className="label text-left text-white"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    className="px-4 py-4 bg-black/50 border border-purple-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-600"
                    placeholder="What's this message about"
                  />
                </div>
                {/* 4th input form */}
                <div className="flex flex-col space-y-2 pb-4">
                  <label
                    htmlFor="message"
                    className="label text-left text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="mb-5 px-4 py-4 resize-none h-50 bg-black/50 border border-purple-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-600"
                    placeholder="Tell me about what you need"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 relative overflow-hidden group disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {/* Submit button */}
                  <span className="relative z-10">
                    {isSending ? "Sending..." : "Submit"}
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-purple-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                {statusMessage && (
                  <p
                    className={`text-center text-sm ${
                      statusType === "success"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
