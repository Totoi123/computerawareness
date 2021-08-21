import Image from "next/image";
import learning from "../public/learning.svg";

const Course = () => {
  return (
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="is-size-1 title has-text-link">
            Top Computer Science Courses
          </h1>
          <div className="columns is-centered mt-4">
            <div className="column is-5">
              <Image src={learning} alt="Computer Science" />
            </div>
          </div>
          <div className="content has-text-left is-size-4 has-text-grey my-6">
            <ol>
              <li>BTECH (CS)</li>
              <li>Bsc (CS)</li>
              <li>BCA</li>
              <li>Bcom (CS)</li>
              <li>BBA (IT)</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
