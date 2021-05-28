import Head from "next/head";
import Typist from "react-typist";
import styles from "./Projects.module.scss";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <Head>
          <title>Jacob - Projects</title>
          <meta name="description" content="My Projects" />
        </Head>
        <h2>
          <Typist>my projects</Typist>
        </h2>
        <p>
          <a
            href="https://github.com/Kubajsa/randomTp"
            className={styles.project}
            target="_blank"
          >
            RandomTP
          </a>{" "}
          - Minecraft Spigot 1.13-1.16 RandomTP plugin{" "}
          <span className={styles.language}>(Java)</span>
        </p>
        <p>
          <a
            href="https://quiz.jacobdev.tk"
            className={styles.project}
            target="_blank"
          >
            React Quiz App
          </a>{" "}
          - Simple Quiz App made with ReactJS{" "}
          <span className={styles.language}>(ReactJS, TypeScript)</span>
        </p>
        <p>
          <a
            href="https://github.com/Kubajsa/jacobdev.tk"
            className={styles.project}
            target="_blank"
          >
            jacobdev.tk
          </a>{" "}
          - My First Website{" "}
          <span className={styles.language}>(NextJS, TypeScript)</span>
        </p>
        <p>
          <a
            href="https://github.com/Kubajsa/discord.pyBot"
            className={styles.project}
            target="_blank"
          >
            Kubajsa's Bot
          </a>{" "}
          - Discord bot made with discord.py{" "}
          <span className={styles.language}>(Python)</span>
        </p>
        <Link href="/">
          <a className={styles.homeButton}>home</a>
        </Link>
      </div>
    </div>
  );
}
