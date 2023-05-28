import "./input.css";
export default function Input() {
  return (
    <>
      <label for="form--input" className="form--input--label">
        Motto
      </label>
      <input id="form--input" className="form--input notes" type="text"></input>
    </>
  );
}
