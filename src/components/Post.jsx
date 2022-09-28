import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { useState } from "react";

export function Post({ author, content, publishedAt }) {
  // Hooks
  const [comments, setComments] = useState(["Post bacana 🙀"]);
  const [newCommentText, setNewCommentText] = useState("");
  // ------------------------------------

  // Consts
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommentText.length === 0;
  // ------------------------------------

  // Functions

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(comment) {
    const commentsWithoutDeletedOne = comments.filter((resource) => {
      return comment !== resource;
    });

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Campo está vazio!");
  }

  // ------------------------------------

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/victorlucass.png" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span> {author.role} </span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type == "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Nossa, adorei amigo! Parabéns"
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
