import { useState, useCallback } from 'react';

const VALIDATORS = {
  required: (val) => !val.trim() ? 'This field is required.' : null,
  email: (val) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) ? 'Please enter a valid email address.' : null,
  minLength: (min) => (val) => val.trim().length < min ? `Must be at least ${min} characters.` : null,
  maxLength: (max) => (val) => val.trim().length > max ? `Must be ${max} characters or fewer.` : null,
};

/**
 * useForm — lightweight form state + validation hook.
 * @param {Object} initialValues  — { field: initialValue }
 * @param {Object} validationRules — { field: [validator fns] }
 */
export function useForm(initialValues = {}, validationRules = {}) {
  const [values, setValues]   = useState(initialValues);
  const [errors, setErrors]   = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateField = useCallback((name, value) => {
    const rules = validationRules[name] || [];
    for (const rule of rules) {
      const error = rule(value);
      if (error) return error;
    }
    return null;
  }, [validationRules]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [touched, validateField]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);

  const validateAll = useCallback(() => {
    const newErrors = {};
    let valid = true;
    for (const name of Object.keys(initialValues)) {
      const error = validateField(name, values[name] ?? '');
      if (error) { newErrors[name] = error; valid = false; }
    }
    setErrors(newErrors);
    setTouched(Object.fromEntries(Object.keys(initialValues).map(k => [k, true])));
    return valid;
  }, [initialValues, validateField, values]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setSubmitting(false);
  }, [initialValues]);

  return {
    values, errors, touched, submitting,
    setSubmitting, handleChange, handleBlur,
    validateAll, reset,
    // Expose validators for external use
    validators: VALIDATORS,
  };
}
