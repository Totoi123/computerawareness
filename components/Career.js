/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const careers = [
  {
    name: "Computer Programmer",
    description: "Write code to generate programs",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-1169539468-800x534-c-center-425x230-c-default.jpg",
  },

  {
    name: "Systems Manager",
    description: "Oversee and coordinate IT opeartions",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-1151541568-800x534-c-center-425x230-c-default.jpg",
  },
  {
    name: "Web Developer",
    description: "Plan and produce websites",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-1097995482-800x534-c-center-425x230-c-default.jpg",
  },
  {
    name: "Software Engineer",
    description: "Design and unify software creation",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-1180183927-800x534-c-center-425x230-c-default.jpg",
  },

  {
    name: "IT Architect",
    description: "Design data communication networks",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-672157033-800x534-c-center-425x230-c-default.jpg",
  },
  {
    name: "Network Administrator",
    description: "Maintain the daily operations of computer networks",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-878980472-800x534-c-center-425x230-c-default.jpg",
  },
  {
    name: "System Analyst",
    description: "Streamline existing IT infrastructures",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-1139938843-800x534-c-center-425x230-c-default.jpg",
  },
  {
    name: "Security Analyst",
    description: "Protect networks from cyberattacks",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-1194430821-800x534-c-center-425x230-c-default.jpg",
  },
  {
    name: "Information Researcher",
    description: "Create cutting edge technology",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-671372113-800x534-c-center-425x230-c-default.jpg",
  },
  {
    name: "Video Game Developer",
    description: "Design the next big game",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-1183215609-800x534-c-center-425x230-c-default.jpg",
  },

  {
    name: "Health Information Technician",
    description: "Protect patient-related data",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-996434550-800x534-c-center-425x230-c-default.jpg",
  },

  {
    name: "Web Designer",
    description: "Create engaging websites",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-1166409027-800x534-c-center-425x230-c-default.jpg",
  },
  {
    name: "Data Scientist",
    description: "Analyze data and address targeted problems",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-1187865876-800x534-c-center-425x230-c-default.jpg",
  },
  {
    name: "Software Developer",
    description: "Manage the creation of computer programs",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-1187635188-800x534-c-center-425x230-c-default.jpg",
  },
  {
    name: "Database Administrator",
    description: "Store, order and protect company data",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-1218610083-800x534-c-center-425x230-c-default.jpg",
  },

  {
    name: "Hardware Engineer",
    description: "Create, implement and test physical computer components",
    imgurl:
      "https://www.computerscience.org/app/uploads/2020/10/GettyImages-596472059-800x534-c-center-425x230-c-default.jpg",
  },
];

const Career = () => {
  return (
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="is-size-1 title has-text-link">
            Computer Science Careers
          </h1>
          <div className="columns is-multiline mt-5">
            {careers.map((career) => (
              <div className="column is-3" key={career.name}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={career.imgurl} alt="career" />
                    </figure>
                  </div>
                  <div className="content">
                    <p className="has-text-centered mt-5 has-text-link title is-size-5">
                      {career.name}
                    </p>
                    <p className="has-text-centered  p-5 is-size-6">
                      {career.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="container has-text-centered mt-6">
            <Link href="/course">
              <a className="button is-medium  is-link">Explore Courses</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
