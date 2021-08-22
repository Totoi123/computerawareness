import Image from "next/image";

import frontend from "../public/frontend.svg";
import backend from "../public/backend.svg";

const Path = () => {
  return (
    <>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-link is-size-1 mb-5">
              Web Development career paths
            </h1>
            <div className="columns mt-5 p-4">
              <div className="column is-6">
                <Image src={frontend} alt="frontend developer" />
              </div>
              <div className="column is-6">
                <div className="container ml-5">
                  <p className="is-size-2 title has-text-link">
                    Frontend Developer
                  </p>
                  <p className="is-size-4 has-text-grey ml-6">
                    Front end developers create the UI of the website
                  </p>
                  <p className="is-size-4 has-text-link mt-2">
                    Tools and Technologies
                  </p>
                  <div className="content is-medium">
                    <ul className="ml-6">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                  <p className="is-size-4 has-text-link mt-2">Average Salary</p>
                  <p className="is-size-4 has-text-grey ml-6 mt-2">
                    {" "}
                    &#8377; 487,700/annum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns mt-5 p-4">
              <div className="column is-6">
                <div className="container ml-5">
                  <p className="is-size-2 title has-text-link">
                    Backend Developer
                  </p>
                  <p className="is-size-4 has-text-grey ml-6">
                    Backend Developer focuses on server and web architecture.
                  </p>
                  <p className="is-size-4 has-text-link mt-2">
                    Tools and Technologies
                  </p>
                  <div className="content is-medium">
                    <ul className="ml-6">
                      <li>Database</li>
                      <li>API</li>
                      <li>Backend Programming Language</li>
                    </ul>
                  </div>
                  <p className="is-size-4 has-text-link mt-2">Average Salary</p>
                  <p className="is-size-4 has-text-grey ml-6 mt-2">
                    {" "}
                    &#8377; 792,000/annum
                  </p>
                </div>
              </div>
              <div className="column is-6">
                <Image src={backend} alt="frontend developer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Path;
