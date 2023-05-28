import Entry from "./entry/Entry";
import "./entry--list.css";
export default function EntryList() {
  return (
    <ul className="entry--list">
      <li>
        <Entry
          date="FEB 27, 2028"
          title="That's life in the city"
          text="Si sine causa? quae fuerit causa, mox videro;
        interea hoc tenebo, si mihi.
        Et quidem se repellere, idque tnstituit, docere sic
        omne animal, simul atque."
          favbutton="true"
        />
      </li>
      <li>
        <Entry
          date="FEB 26, 2028"
          title="That's life in the city"
          text="Si sine causa? quae fuerit causa, mox videro;
        interea hoc tenebo, si mihi.
        Et quidem se repellere, idque tnstituit, docere sic
        omne animal, simul atque."
          favbutton="false"
        />
      </li>
      <li>
        <Entry
          date="FEB 25, 2028"
          title="That's life in the city"
          text="Si sine causa? quae fuerit causa, mox videro;
        interea hoc tenebo, si mihi.
        Et quidem se repellere, idque tnstituit, docere sic
        omne animal, simul atque."
          favbutton="false"
        />
      </li>
    </ul>
  );
}
