import favicon from "../assets/favicon.ico";
import githubIcon from "../../src/assets/gitHubIconWhite.png";
import KnightIcon from "../assets/knight.png";
import "../index.scss";
import displayController from "./displayController";

document.querySelector('[type="image/x-icon"]').href = favicon;
document.getElementById("Knight-img-image").src = KnightIcon;
document.getElementById("github-icon").src = githubIcon;

displayController;
