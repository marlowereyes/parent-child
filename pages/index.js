import styles from "@/styles/Home.module.css";
import ParentToChild from "./ParentOne";
import ChildToParent from "./ParentTwo";
import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <h1>Activities Quiz</h1>
        <Quiz />
      </main>
    </>
  );
}

// <ParentToChild/>
// <ChildToParent/>