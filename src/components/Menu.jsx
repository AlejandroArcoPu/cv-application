import { User, School, BriefcaseBusiness } from "lucide-react";
import "../styles/Menu.css";

const menuElements = [
  { name: "Personal Information", icon: <User /> },
  { name: "Education", icon: <School /> },
  { name: "Experience", icon: <BriefcaseBusiness /> },
];

export default function Menu({ active, setActive }) {
  const handleActive = (elementName) => {
    setActive(elementName);
  };
  return (
    <aside>
      <nav>
        <ul className="ecv-edit-list">
          {menuElements.map((element) => (
            <li
              key={element.name}
              onClick={() => handleActive(element.name)}
              className={
                active === element.name
                  ? "ecv-edit-elementList is-selected"
                  : "ecv-edit-elementList"
              }
            >
              <a className="ecv-edit-link" href="#">
                {element.icon}
                {element.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
