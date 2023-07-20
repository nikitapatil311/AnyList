import styles from "../styles/GroceryList.module.css";
import GroceryCard from "./GroceryCard";

const GroceryList = ({ groceryList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Groceries</h1>

      <div className={styles.wrapper}>
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
      </div>
    </div>
  );
};
export default GroceryList;
