import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/victorlucass.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>
                Victor Lucas <span>(você)</span>
              </strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={24} />
            <strong>
              Aplaudir <span>20</span>
            </strong>
          </button>
        </footer>
      </div>
    </div>
  );
}
