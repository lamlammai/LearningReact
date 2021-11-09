import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options:PropTypes.array
};

SelectField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
}

function SelectField(props) {
  const {
    field,  label, placeholder, disabled, options
  } = props;
  const { name } = field;
  const handleSelectOptionChange = (selectedOption) =>{
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;
    const changeEvent = {
      target: {
        name: name,
        value:selectedValue
      }
    }
    field.onChange(changeEvent)
  }
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        {...field}
    	  onChange={handleSelectOptionChange}
        disabled={disabled}
        placeholder={placeholder}
        options={options}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default SelectField;