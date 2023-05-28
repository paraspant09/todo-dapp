import styles from "../styles/Header.module.css";
import { ReactComponent as Wallet } from "../assets/wallet.svg";
import { useAppSelector } from "../redux/config/hooks";

export const Header = ({ setShowNav }: any) => {
  const isDarkMode = useAppSelector((state) => state.todo.isDarkMode);
  return (
    <div className={styles.header}>
      <p
        onClick={() => setShowNav((s: boolean) => !s)}
        className={styles.section}
      >
        Header
      </p>
      <div
        style={{ color: !isDarkMode ? "white" : "" }}
        className={styles.wallet}
      >
        <Wallet /> 0.2 $XYZ
        <div className={styles.greenButton}>Tier 1</div>
      </div>
    </div>
  );
};
