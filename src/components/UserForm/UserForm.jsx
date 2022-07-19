import { useEffect, useState } from "react";
import { Field } from "../Field/Field";
import axios from "axios";
import spinner from "../../Spinner.svg";
import "./style.css";
import { Results } from "../Results/Results";

export function UserForm() {
  const [form, setForm] = useState(null);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [results, setResults] = useState(null);

  const formFields = form && Object.keys(form);

  useEffect(() => {
    loadInitiatedForm();
  }, []);

  async function loadInitiatedForm() {
    const works = await (await axios.get("http://localhost:4000/works")).data;
    console.log({ works });
    const intialForm = {};
    works.forEach((currentWorkName) => (intialForm[currentWorkName] = null));
    console.log({ intialForm });
    setForm(intialForm);
  }

  async function submitForm() {
    try {
      setIsLoadingResults(true);
      const result = await axios.post(
        "http://localhost:4000/form-prices",
        form
      );
      setResults(result.data);
    } catch (error) {
    } finally {
      setIsLoadingResults(false);
    }
  }

  function changeFieldValue(fieldName, newValue) {
    const formCopy = JSON.parse(JSON.stringify(form));
    formCopy[fieldName] = newValue;
    setForm(formCopy);
  }

  if (!form) return null;

  return (
    <div className="user-form">
      <p>Choose budget for each of the following options</p>
      <div className="form-box">
        <div></div>
        <div className="option-title">
          <p>not interested</p>
        </div>
        <div className="option-title">
          <p>basic</p>
        </div>
        <div className="option-title">
          <p>average</p>
        </div>
        <div className="option-title">
          <p>expensive</p>
        </div>

        {formFields.map((currentFieldName) => (
          <Field
            name={currentFieldName}
            value={form[currentFieldName]}
            changeFieldValue={changeFieldValue}
          />
        ))}
      </div>
      {isLoadingResults ? (
        <img src={spinner} />
      ) : (
        <button className="button" onClick={submitForm}>
          Submit
        </button>
      )}
      {results && <Results results={results} />}
    </div>
  );
}

function getFormFields() {
  return ["breaking indoor wall", "new toilet point"];
}
