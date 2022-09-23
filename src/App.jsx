import { Header } from "./components/Header";
import "./global.css";
import styles from "./app.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main></main>
      </div>
    </>
  );
}

export default App;
