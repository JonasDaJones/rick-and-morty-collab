import TabBar from "./tab-bar/TabBar";
import EntryList from "./entry-list/EntryList";
import "./entries--section.css";

export default function EntriesSection() {
  return (
    <section className="enries--section">
      <TabBar />
      <EntryList />
    </section>
  );
}
