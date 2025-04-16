import React from 'react';

const Exprenice = () => {
  const exprenienceDetails = [
    {
      logo: "logo-arrow",
      degree: 'Cloud Apprenticeship',
      institution: 'Aerawat Corp',
      // institution: 'Phoenix College of Management, Kathmandu',
      grades: 'Aws Cloud',
      year: 'february 2025 - present',
      desc: "Learn about various Cloud service .",
    },
    // {
    //   logo: "logo-play",
    //   degree: 'Canvas International College ',
    //   institution: 'Basundhara Chowki, Kathmandu',
    //   grades: 'GPA 2.93 ',
    //   year: ' [2020-2022]',
    //   desc: "I completed my class 12 high school education at Canvas International College, Kathmandu, where I studied Management in computer science.",       
    // },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
          My <span className="text-cyan-600">Exprience</span>
        </h3>
      <p className="text-lg text-center font-normal ">My Exprience details are as follows.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {exprenienceDetails.map((exp, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <ion-icon name={exp.logo} class="text-primary text-xl mr-2" />
            <div className="text-lg font-medium mb-2 text-gray-700">{exp.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{exp.institution}</div>
              <div className="text-base text-gray-500">{exp.grades}</div>
              <div className="text-base text-gray-500">{exp.year}</div>
            </div>
            <p className="text-gray-700">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exprenice;
