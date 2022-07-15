import { useState } from "react";
import { Field } from "../Field/Field";
import axios from "axios";
import spinner from "../../Spinner.svg";

export function UserForm() {
  const formInitialFields = getFormFields();

  const [form, setForm] = useState(getInitiatedForm());
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [results, setResults] = useState(null);

  const formFields = Object.keys(form);
  //console.log({ formFields });

  function getInitiatedForm() {
    const result = {};
    formInitialFields.forEach(
      (currentFieldName) => (result[currentFieldName] = null)
    );

    return result;
  }

  async function submitForm() {
    try {
      setIsLoadingResults(true);
      const result = await axios.post(
        "http://localhost:4000/form-prices",
        form
      );
      setResults(result);
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

  //  console.log({form})

  return (
    <div className="user-form">
      <p>User Form</p>
      {formFields.map((currentFieldName) => (
        <Field
          name={currentFieldName}
          value={form[currentFieldName]}
          changeFieldValue={changeFieldValue}
        />
      ))}
      {isLoadingResults ? (
        <img src={spinner} />
      ) : (
        <button onClick={submitForm}>Submit</button>
      )}
      <code>{JSON.stringify(results)}</code>
    </div>
  );
}

function getFormFields() {
  return ["breaking indoor wall", "new toilet point"];
}

const FORM_EXAPMLE = {
  "Breaking indoor wall": "avarage",
  "Adding indoor wall": null,
  "Breaking bathroom": null,
};
