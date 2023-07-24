import styles from "../styles/GroceryList.module.css";
import GroceryCard from "./GroceryCard";

const GroceryList = ({ groceryList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Groceries</h1>

      <div className={styles.wrapper}>
        {groceryList.map((grocery) => (
          <GroceryCard key={grocery._id} grocery={grocery} />
        ))}
      </div>
    </div>
  );
};
export default GroceryList;
