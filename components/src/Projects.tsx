import TwilightTowers from "./Images/TwilightTowers.jpg";
import SlimJim from "./Videos/SlimJim.mp4";
import BankAccountSimulator from "./Images/BankAccountSimulator.png";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="mx-auto">
        <div className="text-center">
          <h2 className="text-white text-5xl mb-5">
            <span className="span">Featured</span> Projects
          </h2>
          <p className="text">
            Below are a few projects I’ve worked on, along with a short overview
            of each.
          </p>
          {/* 1st box */}
          <div className="card_container">
            <div className="border_card_group">
              <div className="project_border_card">
                <div className="project_image_group">
                  <video
                    className="project_image"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src={SlimJim} type="video/mp4" />
                    Your browser does not support this video format.
                  </video>
                  {/* <img src={baby} className="project_image"></img> */}
                </div>
                <div className="label text-2xl text-left mt-10">
                  Slim Jim (Workout App)
                </div>
                <p className="text_left">
                  Slim Jim was a project for my advanced software development
                  course, where my team gathered community feedback and
                  developed an application based on that input.
                </p>
                <div className="small_box_purple_rounded mt-2">Django</div>
                {/* <div className="small_box_purple_rounded mt-2">HTML</div> */}
                <div className="small_box_purple_rounded mt-2">Python</div>
              </div>
            </div>
            {/* 2nd box */}
            <div className="border_card_group">
              <div className="project_border_card">
                <div className="project_image_group">
                  <img src={TwilightTowers} className="project_image"></img>
                </div>
                <div className="label text-2xl text-left mt-10">
                  Twilight Tower
                </div>
                <p className="text_left">
                  Twilight Tower was my game design course’s final project,
                  where my team collaborated on the game’s concept, visuals, and
                  core gameplay.
                </p>
                <div className="small_box_purple_rounded mt-2">Unity</div>
                <div className="small_box_purple_rounded mt-2">C#</div>
              </div>
            </div>
            {/* 3rd box */}
            <div className="border_card_group">
              <div className="project_border_card">
                <div className="project_image_group">
                  <img
                    src={BankAccountSimulator}
                    className="project_image"
                  ></img>
                </div>
                <div className="label text-2xl text-left mt-10">
                  Bank Simulator + UI
                </div>
                <p className="text_left">
                  This project has primarily been a learning experience to help
                  me become more comfortable working with C#. This is still in
                  progress.
                </p>{" "}
                <div className="small_box_purple_rounded mt-2">XML</div>
                <div className="small_box_purple_rounded mt-2">C#</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
