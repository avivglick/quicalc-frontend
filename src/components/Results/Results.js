export function Results({ results }) {
  console.log({ results });
  return (
    <div className="results">
      {Object.keys(results)
        .filter((workName) => results[workName])
        .map((workName) => (
          <div className="result-container">
            <p>
              {workName}: ${results[workName]}
            </p>
          </div>
        ))}
    </div>
  );
}
