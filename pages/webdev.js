import Image from "next/image";
import Path from "../components/Path";
import developer from "../public/developer.svg";

const Webdev = () => {
  return (
    <>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="is-size-1 title has-text-link">
              Introduction to Web Development
            </h1>
            <div className="columns is-centered mt-4">
              <div className="column is-5 ">
                <Image src={developer} alt="developer" />
              </div>
            </div>

            <p className="is-size-4 has-text-grey has-text-centered mt-5">{`"We don't just build websites, we build websites that SELLS"`}</p>
            <p className="is-size-4 has-text-grey has-text-centered mt-2">{`- Christopher Dayagdag`}</p>
          </div>
        </div>
      </section>
      <Path />
    </>
  );
};

export default Webdev;
