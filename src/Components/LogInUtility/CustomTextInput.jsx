import React from 'react';
import { useField } from 'formik';

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="a11yHidden">
        {label}
      </label>
      <input className="text-input" tabIndex="0" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="input-error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default React.memo(CustomTextInput);
