import Tab1 from "./tab1/Tab1";
import Tab2 from "./tab2/Tab2";
import "./tab--bar.css";
export default function TabBar() {
  return (
    <ul className="tab--bar">
      <li>
        <Tab1 />
      </li>
      <li>
        <Tab2 />
      </li>
    </ul>
  );
}
