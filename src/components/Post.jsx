import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.authorAvatar}
            src="https://github.com/victorlucass.png"
          />
          <div className={styles.authorInfo}>
            <strong>Victor Lucas</strong>
            <span> Dev. Front-End </span>
          </div>
        </div>
        <time title="24 de Setembro de 2022" dateTime="2022-09-24 16:32:00">
          Públicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">👉&nbsp;&nbsp;jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}