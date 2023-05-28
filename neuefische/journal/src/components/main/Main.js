import EntriesSection from "./entries-section/EntriesSection";
import EntryForm from "./entry-form/EntryForm";
import "./main.css";
export default function Main() {
  return (
    <main>
      <>
        <EntryForm />
        <EntriesSection />
      </>
    </main>
  );
}
