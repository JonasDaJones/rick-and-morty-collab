import Input from "./input/Input";
import SubmitButton from "./submit-button/SubmitButton";
import Textarea from "./textarea/Textarea";
import "./entry--form.css";

export default function EntryForm() {
  return (
    <form className="form">
      <h2>NEW ENTRY</h2>
      <Input />
      <Textarea />
      <SubmitButton />
    </form>
  );
}
