import baby from "./Images/baby.png";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl mb-5">
            <span className="span">Featured</span> Projects
          </h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
          {/* 1st box */}
          <div className="card_container">
            <div className="border_card_group">
              <div className="project_border_card">
                <div className="project_image_group">
                  <img src={baby} className="project_image"></img>
                </div>
                <div className="label text-2xl text-left mt-10">Sample</div>
                <p className="text_left">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor
                  sit amet consectetur adipiscing elit quisque faucibus.
                </p>
                <div className="small_box_purple_rounded mt-2">Sample</div>
              </div>
            </div>
            {/* 2nd box */}
            <div className="border_card_group">
              <div className="project_border_card">
                <div className="project_image_group">
                  <img src={baby} className="project_image"></img>
                </div>
                <div className="label text-2xl text-left mt-10">Sample</div>
                <p className="text_left">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor
                  sit amet consectetur adipiscing elit quisque faucibus.
                </p>
                <div className="small_box_purple_rounded mt-2">Sample</div>
              </div>
            </div>
            {/* 3rd box */}
            <div className="border_card_group">
              <div className="project_border_card">
                <div className="project_image_group">
                  <img src={baby} className="project_image"></img>
                </div>
                <div className="label text-2xl text-left mt-10">Sample</div>
                <p className="text_left">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor
                  sit amet consectetur adipiscing elit quisque faucibus.
                </p>
                <div className="small_box_purple_rounded mt-2">Sample</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
