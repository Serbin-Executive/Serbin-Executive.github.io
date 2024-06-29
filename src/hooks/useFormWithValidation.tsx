import { useCallback, useState, ChangeEvent } from "react";


interface Values {
  [key: string]: string;
}

interface Errors {
  [key: string]: string;
}

export function useFormWithValidation() {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Errors>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    let tempErrors = { ...errors, [name]: target.validationMessage };
    tempErrors = validatePasswords(name, value, tempErrors);

    setValues({ ...values, [name]: value });
    setErrors(tempErrors);
    setIsValid(target.closest("form")?.checkValidity() ?? false);
  };

  const validatePasswords = (name: string, value: string, currentErrors: Errors) => {
    let tempErrors = { ...currentErrors };

    if (name === "password" || name === "repPassword") {
      const password = name === "password" ? value : values.password;
      const repPassword = name === "repPassword" ? value : values.repPassword;

      if (password !== repPassword) {
        tempErrors.repPassword = "Passwords do not match";
      } else {
        delete tempErrors.repPassword;
      }
    }

    return tempErrors;
  };

  const resetForm = useCallback(
    (newValues: Values = {}, newErrors: Errors = {}, newIsValid: boolean = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChangeValue,
    errors,
    isValid,
    resetForm,
    setIsValid,
    setValues,
  };
}
