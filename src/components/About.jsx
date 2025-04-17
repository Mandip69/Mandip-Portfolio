import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "01" }
  ];

 
  const googleDriveLink = "https://drive.google.com/file/d/12D9OvRfBye1NZyrgBG8wQLADeM3ac44h/view?usp=sharing";


  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Hi, I'm Mandip Chaudhary, a passionate Front-end Developer based in Kathmandu.I am currently pursuing a Bachelor's degree in Information Technology at Phoenix College of Management, with an expected graduation in April 2025.
                <br />In addition to my academics, I actively participate in tech events and hackathons. I was part of a team that earned the 1st Runner-Up position in the FinTech Hackathon organized by Phoenix College, where we built Paiso.com,
                 a financial literacy platform designed to educate and empower users with smart financial tools. More recently, I participated in an intense 48-hour hackathon, where our team was recognized with an Honorable Mention for our innovative approach and teamwork. These experiences have strengthened my ability to work under pressure, collaborate effectively, and deliver practical solutions in a short time frame.
                <br />
                To further strengthen my skills, I’ve completed several training programs and certifications. I received 40 hours of MERN Stack training from CodroidHub and Clock b Business Technology, where I honed my skills in full-stack JavaScript development.
                <br /> I also completed the One Shot Tailwind CSS course from Digital Pathshala, which helped me create clean, responsive, and modern user interfaces. Additionally, I learned how to craft and deploy professional portfolios through a hands-on workshop hosted by CFC Kathmandu.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
