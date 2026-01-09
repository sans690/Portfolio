export function About() {
  return (
    <section id="about" className="section">
      <div className="space-y-6">
        <div className="mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-5xl mb-5">
              About
              <span className="span"> Name</span>
            </h2>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
              consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
              quisque faucibus ex sapien vitae pellentesque.
            </p>
            <div className="card-container">
              <div className="border_card">
                {" "}
                <p className="label text-left text-3xl">Sample</p>
                <p className="text text-left">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div>
              <div className="border_card">
                {" "}
                <p className="label text-left text-3xl">Sample</p>
                <p className="text text-left">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div>
              <div className="border_card">
                <p className="label text-left text-3xl">Sample</p>
                <p className="text text-left">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-20 justify-center items-center">
              <div className="w-full h-full min-h-5px max-w-7xl bg-linear-to-br from-purple-950/30 to-black p-8 rounded-xl border border-purple-600/30 ">
                <p className="label text-left text-3xl">The Journey</p>
                <p className="text text-left">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit
                  amet consectetur adipiscing elit quisque faucibus ex.
                </p>
                <p className="text text-left">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit
                  amet consectetur adipiscing elit quisque faucibus ex.
                </p>
                <p className="text text-left">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit
                  amet consectetur adipiscing elit quisque faucibus ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
