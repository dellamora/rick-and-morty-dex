import "./styles.css";
import Rickface from "../../assets/rickFace.png";

function Header() {
  return (
    <header>
      <nav className="navcontainer">
        <img src={Rickface}></img>
        <h1 className="title">Rickdex</h1>
        <img src={Rickface}></img>
      </nav>
    </header>
  );
}

export default Header;
