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
            <div className="card_container ">
              {/* 1st box */}
              <div className="about_border_card">
                {" "}
                <p className="label text-center text-3xl mb-5">Education</p>
                <ul className="list-disc space-y-2 pl-6 text-left marker:text-purple-300">
                  <li className="text_in_box">University of Virginia</li>
                  <li className="text_in_box">
                    Central Virginia Community College
                  </li>
                  <li className="text_in_box">
                    Blue Ridge Community College-SDL
                  </li>
                  <li className="text_in_box">
                    Virginia Western Community College-SDL
                  </li>
                </ul>
              </div>
              {/* 2nd box */}
              <div className="about_border_card">
                {" "}
                <p className="label text-center text-3xl mb-5">
                  Experiences
                </p>{" "}
                <ul className="list-disc space-y-2 pl-6 text-left marker:text-purple-300">
                  <li className="text_in_box">
                    CloudFit Software: Software Development Intern
                  </li>
                  <li className="text_in_box">
                    Radiant Health and Wellness: Front Desk/ IT
                  </li>
                  <li className="text_in_box">
                    Central Virginia Community College: Peer Writing Tutor
                  </li>
                </ul>
              </div>
              {/* 3rd box */}
              <div className="about_border_card">
                <p className="label text-center text-3xl mb-5">Interests</p>
                <ul className="list-disc space-y-2 pl-6 text-left marker:text-purple-300">
                  <li className="text_in_box">Welding</li>
                  <li className="text_in_box">3D Printing</li>
                  <li className="text_in_box">Woodworking</li>
                  <li className="text_in_box">Art</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col mt-20 justify-center items-center">
              <div className="w-full h-full min-h-5px max-w-7xl bg-linear-to-br from-purple-950/30 to-black p-8 rounded-xl border border-purple-600/30 ">
                <p className="label text-center text-3xl mb-6">
                  Recommendations
                </p>
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
