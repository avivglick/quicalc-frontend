export function Field({ name, value, changeFieldValue }) {
  return (
    <div className="field">
      <p>{name}</p>
      <input
        className="not interested"
        type="radio"
        checked={value === "not interested"}
        onChange={() => changeFieldValue(name, "not interested")}
      />
      <input
        className="basic"
        type="radio"
        checked={value === "basic"}
        onChange={() => changeFieldValue(name, "basic")}
      />
      <input
        className="average"
        type="radio"
        checked={value === "average"}
        onChange={() => changeFieldValue(name, "average")}
      />
      <input
        className="expensive"
        type="radio"
        checked={value === "expensive"}
        onChange={() => changeFieldValue(name, "expensive")}
      />
    </div>
  );
}
