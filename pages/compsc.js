import Image from "next/image";
import Career from "../components/Career";
import open from "../public/open.svg";

const Compsc = () => {
  return (
    <>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="is-size-1 title has-text-link">
              Why Computer Science ?
            </h1>
            <div className="columns is-centered mt-4">
              <div className="column is-5">
                <Image src={open} alt="Computer Science" />
              </div>
            </div>
            <p className="is-size-4 has-text-grey">
              Computer Science is one of the fastest growing career choice in
              terms of Job opportunities and higher package with useful
              skillset.With a computer science degree, you can work in
              technological design, maintenance, and analysis, among other
              areas.
            </p>

            <p className="is-size-4 has-text-grey mt-6">
              High demand for qualified computer science professionals mean high
              projected growth for many careers.
            </p>
          </div>
        </div>
      </section>
      <Career />
    </>
  );
};

export default Compsc;
