export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-white text-5xl mb-5">
            <span className="span">Skills</span> & Abilities
          </h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
            consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
            quisque faucibus ex sapien vitae pellentesque.
          </p>
          <div className="card_container">
            <div className="mb-10 align-items-left">
              <div className="border_card_purple mb-10">
                {" "}
                <p className="label text-left text-3xl">Frontend</p>
                <div className="flex_container">
                  <div className="small_box_purple">Text</div>
                  <div className="small_box_purple">Text</div>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <div className="border_card_purple mb-10">
                {" "}
                <p className="label text-left text-3xl">Backend</p>
                <div className="flex_container">
                  <div className="small_box_purple">Text</div>
                  <div className="small_box_purple">Text</div>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <div className="border_card_purple mb-10">
                {" "}
                <p className="label text-left text-3xl">Tools</p>
                <div className="flex_container">
                  <div className="small_box_purple">Text</div>
                  <div className="small_box_purple">Text</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
