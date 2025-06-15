import "../styles/Header.css";
import { Sun, Moon, Github } from "lucide-react";
import logo from "../assets/icon.avif";

export default function Header({ nightMode, setNightMode }) {
  return (
    <>
      <header className="ecv-header">
        <div className="ecv-header-title">
          <img
            className="ecv-header-title-img"
            src={logo}
            alt="EasyCV app logo, with a gradient background and a paper simulating a cv."
          />
          <h1 className="ecv-header-title-h1">EasyCV</h1>
        </div>
        <div className="ecv-header-links">
          <button
            className="ecv-header-links-button"
            onClick={() => setNightMode(!nightMode)}
          >
            {nightMode ? <Moon /> : <Sun />}
          </button>
          <a
            className="ecv-header-links-button"
            href="https://github.com/AlejandroArcoPu/cv-application"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Github />
          </a>
        </div>
      </header>
    </>
  );
}
