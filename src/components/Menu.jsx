import { User, School, BriefcaseBusiness, CircleCheckBig } from "lucide-react";
import "../styles/Menu.css";

const menuElements = [
  { name: "Personal Information", icon: <User /> },
  { name: "Education", icon: <School /> },
  { name: "Experience", icon: <BriefcaseBusiness /> },
  { name: "Extra", icon: <CircleCheckBig /> },
];

export default function Menu({ active, setActive }) {
  const handleActive = (elementName) => {
    setActive(elementName);
  };
  return (
    <aside className="ecv-menu">
      <nav>
        <ul className="ecv-menu-list">
          {menuElements.map((element) => (
            <li
              key={element.name}
              onClick={() => handleActive(element.name)}
              className={
                active === element.name
                  ? "ecv-menu-elementList is-selected"
                  : "ecv-menu-elementList"
              }
            >
              <a className="ecv-menu-link" href="#">
                {element.icon}
                <span className="ecv-menu-link-text">{element.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
