import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeAcount, setLikeAcount] = useState(0);

  // Functions

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeAcount((valorMaisAtual) => {
      return valorMaisAtual + 1;
    });
  }

  // ------------------------------------

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

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} />
            <strong>
              Aplaudir <span>{likeAcount}</span>
            </strong>
          </button>
        </footer>
      </div>
    </div>
  );
}
