import styles from "./App.module.css";
import useConnectWallet from "./hooks/useConnectWallet";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { useAppSelector } from "./redux/config/hooks";

function App() {
  useConnectWallet();
  const isDarkMode=useAppSelector(state => state.todo.isDarkMode);

  return (
    <div style={!isDarkMode ? {backgroundColor:"lightgreen",color:"black"} : {}} className={styles.rootBox}>
      <NavBar />
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
