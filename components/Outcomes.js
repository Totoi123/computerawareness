import education from "../public/education.svg";
import Image from "next/image";
import Link from "next/link";

const Outcomes = () => {
  return (
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="columns ">
          <div className="column is-6">
            <Image src={education} alt="Education" />
          </div>
          <div className="column is-6 ml-5">
            <h1 className="is-size-1 title has-text-link">Learning Outcomes</h1>

            <div className="content is-large">
              <ul>
                <li>Computer Science as a Career choice</li>
                <li>
                  <Link href="/webdev">
                    <a className="has-text-grey-dark">
                      Introduction to web development
                    </a>
                  </Link>
                </li>
                <li>E-waste Management</li>
                <li>Use of Applications like Gmail, Payment Apps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
