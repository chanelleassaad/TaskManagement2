import Link from "next/link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Task Management</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/task-management-hooks">TM with Hooks</Link>
          </li>
          <li>
            <Link href="/task-management-redux">TM with Redux</Link>
          </li>
          <li>
            <Link href="/task-details">Task Details</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
