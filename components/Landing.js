import Typewriter from "typewriter-effect";
import styles from "../styles/Landing.module.css";
import teaching from "../public/teaching.svg";
import Image from "next/image";
import { motion } from "framer-motion";
const Landing = () => {
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="columns is-vcentered is-6">
          <div className="column is-7">
            <h1 className="is-size-1 title has-text-link has-text-centered">
              Service Learning 2021
            </h1>
            <p className="is-size-3 has-text-grey-dark subtitle has-text-centered mt-3">
              {`"Awareness on career in Computer Science,e-waste management and using of different Application"`}
            </p>

            <p className="is-size-4 has-text-grey has-text-centered">
              Organised by
            </p>
            <div className={styles.type}>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Soram Seema Devi")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Somojit Arambam")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Linthoi Loitongbam")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Takhelchangbam Shitaljit Sharma")
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
              />
            </div>
          </div>

          <motion.div
            className="column is-7"
            initial={{ y: -15 }}
            animate={{ y: 0 }}
            transition={{ yoyo: Infinity, duration: 1.5 }}
          >
            <Image src={teaching} alt="Landingphoto"></Image>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
