import { Formik, Form, FastField } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global.js";
import Images from "../../../../constants/images.js";
import InputField from "../../../../custom-fields/InputField/index.js";
import SelectField from "../../../../custom-fields/SelectField/index.js";
PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const initialvalues = {
    title: "",
    category: null

  }
  // npm i --save react-select
  return (
    <>
      <Formik>
        {(formikProps) => {
          //xu ly du lieu
          const {value, errors, touched} = formikProps;
          console.log(value, errors, touched);
          return (
            <Form  initialValues={initialvalues}>
             
              <FastField 
                name="title"
                component={InputField}
                label="Title"
                placeholder="Eg: Wow nature ..."
              />
              <FormGroup>
                <Label for="titleId">Title</Label>
                <Input
                  name="category"
                  component={SelectField}
                  id="titleId"
                  placeholder="Eg: Wow nature ..."
                />
              </FormGroup>

              <FormGroup>
                <Label for="categoryId">Category</Label>
                <Select
                  id="categoryId"
                  name="categoryId"
                  placeholder="What's your photo category?"
                  options={PHOTO_CATEGORY_OPTIONS}
                />
              </FormGroup>
              <FormGroup>
                <Label for="categoryId">Photo</Label>
                <div>
                  <Button type="button" outline color="primary">
                    Random a photo
                  </Button>
                </div>
                <div>
                  <img
                    width="200px"
                    height="200px"
                    src={Images.COLORFUL_BG}
                    alt="colorful background"
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <Button color="primary">Add to album</Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default PhotoForm;
