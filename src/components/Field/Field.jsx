export function Field({ name, value, changeFieldValue }) {
  return (
    <>
      <div className="label-container">
        <p>{name}</p>
      </div>
      <div className="input-container">
        <input
          className="not interested"
          type="radio"
          checked={value === "not interested"}
          onChange={() => changeFieldValue(name, "not interested")}
        />
      </div>
      <div className="input-container">
        <input
          className="basic"
          type="radio"
          checked={value === "basic"}
          onChange={() => changeFieldValue(name, "basic")}
        />
      </div>
      <div className="input-container">
        <input
          className="average"
          type="radio"
          checked={value === "average"}
          onChange={() => changeFieldValue(name, "average")}
        />
      </div>
      <div className="input-container">
        <input
          className="expensive"
          type="radio"
          checked={value === "expensive"}
          onChange={() => changeFieldValue(name, "expensive")}
        />
      </div>
    </>
  );
}
