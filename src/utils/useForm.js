import { useCallback, useState } from "react";

export function useForm() {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
 
  const onFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setErrors, setIsValid]
  );

  return {
    onFocus, handleChange, setValues, resetForm, isFocused, isValid, values, errors    
  };
}