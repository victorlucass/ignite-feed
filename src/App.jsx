import { Header } from "./components/Header";
import "./global.css";
import styles from "./app.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa
          cupiditate suscipit exercitationem expedita, itaque quibusdam animi
          sapiente veniam facere nobis dignissimos tempora totam repudiandae
          placeat ab molestiae rem natus.
        </main>
      </div>
    </>
  );
}

export default App;
