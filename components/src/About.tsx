import ChrisRec from "./Recommendations/ChrisRec.txt?raw";
import JakeRec from "./Recommendations/JakeRec.txt?raw";

export function About() {
  return (
    <section id="about" className="section">
      <div className="space-y-6">
        <div className="mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-5xl mb-5">
              About
              <span className="span"> Me</span>
            </h2>
            <p className="text">
              Here are a few things about me that might catch your interest
            </p>
            <div className="card_container">
              {/* 1st box */}
              <div className="about_border_card">
                {" "}
                <p className="label text-left text-3xl mb-5">Education</p>
                <p className="text_in_box text-left">University of Virginia</p>
                <p className="text_in_box text-left">
                  Central Virginia Community College
                </p>
                <p className="text_in_box text-left">
                  Blue Ridge Community College-SDL
                </p>
                <p className="text_in_box text-left">
                  Virginia Western Community College-SDL
                </p>
              </div>
              {/* 2nd box */}
              <div className="about_border_card">
                {" "}
                <p className="label text-left text-3xl mb-5">
                  Experiences
                </p>{" "}
                <p className="text_in_box text-left">
                  CloudFit Software: Software Development Intern
                </p>
                <p className="text_in_box text-left">
                  Radiant Health and Wellness: Front Desk/ IT
                </p>
                <p className="text_in_box text-left">
                  Central Virginia Community College: Peer Writing Tutor
                </p>
              </div>
              {/* 3rd box */}
              <div className="about_border_card">
                <p className="label text-left text-3xl mb-5">Interests</p>
                <p className="text text-left">
                  <p className="text_in_box text-left">Welding</p>
                  <p className="text_in_box text-left">3D Printing</p>
                  <p className="text_in_box text-left">Woodworking</p>
                  <p className="text_in_box text-left">Art</p>
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-20 justify-center items-center">
              <div className="w-full h-full min-h-5px max-w-7xl bg-linear-to-br from-purple-950/30 to-black p-8 rounded-xl border border-purple-600/30 ">
                <p className="label text-left text-3xl mb-6">Recommendations</p>
                <p className="text text-left">
                  <p className="text_in_box text-left whitespace-pre-line">
                    {ChrisRec}
                  </p>
                  <p className="text_in_box text-left whitespace-pre-line">
                    {JakeRec}
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
