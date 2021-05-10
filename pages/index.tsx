import Head from "next/head";
import Typist from "react-typist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import Lanyard from "../components/Lanyard";
import styles from "./Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kubajsa | Jacob</title>
        <meta property="og:title" content="jacobdev.tk" />
        <meta property="og:description" content="Hi, I'm Jacob" />
        <meta property="og:url" content="https://www.jacobdev.tk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://kubajsa.github.io/images/github_pfp.png"
        />
        <meta name="description" content="Hi, I'm Jacob" />
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
        <p>
          <Link href="projects">
            <a className={styles.projLink}>my projects</a>
          </Link>
        </p>
        <h2 id={styles.icons}>
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
        </h2>
      </div>
    </div>
  );
}
