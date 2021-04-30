import Head from "next/head";
import Typist from "react-typist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import Lanyard from "../components/Lanyard";
import styles from "./Home.module.scss";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kubajsa | Jacob</title>
      </Head>
      <div style={{ width: "300px" }}>
        <h1>
          <Typist>
            Hello, I'm <span className={styles.purpleText}>Jacob</span>
          </Typist>
        </h1>
      </div>
      <Lanyard />
      <div>
        <h2>
          <a
            href="https://link.jacobdev.tk/git"
            target="_blank"
            className={styles.icon}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://link.jacobdev.tk/discord"
            target="_blank"
            className={styles.icon}
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="https://jacobdev.tk/projects"
            target="_blank"
            className={styles.icon}
          >
            <FontAwesomeIcon icon={faCode} />
          </a>
        </h2>
      </div>
    </div>
  );
}
