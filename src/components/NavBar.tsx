import { ethers } from "ethers";
import { useAppDipatch, useAppSelector } from "../redux/config/hooks";
import styles from "../styles/NavBar.module.css";
import { toggleMode } from "../redux/slices/todoSlice";
import { ReactComponent as Light } from "../assets/light.svg";
import { ReactComponent as Night } from "../assets/night.svg";
import { ReactComponent as Globe } from "../assets/globe.svg";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Stats } from "../assets/stats.svg";
import { ReactComponent as Bars } from "../assets/bars.svg";
import { ReactComponent as Share } from "../assets/share.svg";

export const NavBar = ({showNav}:any) => {
  const { balance } = useAppSelector((state) => state.blockchain);
  const dispatch = useAppDipatch();
  const isDarkMode = useAppSelector((state) => state.todo.isDarkMode);

  const switchDarkMode = () => {
    if (!isDarkMode) dispatch(toggleMode());
  };

  const switchDayMode = () => {
    if (isDarkMode) dispatch(toggleMode());
  };

  const navList = [
    { heading: "Home", logo: <Home /> },
    { heading: "Section 1", logo: <Stats /> },
    { heading: "Section 2", logo: <Bars /> },
    { heading: "Section 3", logo: <Share /> },
    { heading: "Section 4", logo: <Share /> },
  ];

  return (
    <div className={`${styles.navbar} ${showNav ? styles.showNav : styles.hideNav}`}>
      <div className={styles.list}>
        <div style={{ display: "flex", margin: "20px" }}>
          <div
            style={{
              height: "21px",
              backgroundColor: "#3772FF",
              fontSize: "14px",
              borderRadius: "50%",
              padding: "0px 5px",
              marginRight: "10px",
            }}
          >
            N
          </div>
          <div>Name</div>
        </div>
        <ul style={{ padding: "0px 20px" }}>
          {navList.map((item) => (
            <li
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                padding: "5px",
              }}
              key={"Navbar - " + item.heading}
            >
              {item.logo} {item.heading}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ display: "flex",flexDirection:"column",gap:"8px", margin: "20px" }}>
        <div style={{ display: "flex",flexDirection:"row",gap:"5px"}}>
          <div style={{color:!isDarkMode ? "white" : ""}} className={styles.greyButton}>${ethers.formatEther(balance.toString())}</div>
          <div className={styles.greenButton}>BUY $</div>
        </div>
        <div style={{ display: "flex",flexDirection:"row"}}>
          <Globe style={{ marginRight: "10px" }} />
          <div
            style={{
              position: "relative",
              backgroundColor: isDarkMode ? "#242731" : "#ccc",
            }}
            className={styles.darkModeSwitch}
          >
            <Night
              onClick={switchDarkMode}
              style={{ position: "absolute", top: "6px", left: "5px" }}
            />{" "}
            <Light
              onClick={switchDayMode}
              style={{ position: "absolute", right: "0px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
