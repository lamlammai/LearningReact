import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputSearchItem from "../InputSearchItem/InputSearchItem";
import { Formik, Field, Form } from "formik";
import "./InputSearch.css";
import classNames from "classnames";
function InputSearch() {
  const [isShow, setIsShow] = useState(false);
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const handleClick = () => {
    setInput1(!input1);
    setInput2(!input2);
    setIsShow((oldState) => !oldState);
  };
  return (
    <>
      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form className="FormSearch" id="FormSearch">
          <button
            className={classNames("btn-search", { input2: input2 })}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon="search" />
          </button>
          <Field
            className={classNames("input", { input1: input1 })}
            type="text"
            name ="search"
            placeholder="Nhap ..."
            onClick={handleClick}
          />
          {isShow && (
            <>
              <InputSearchItem />
            </>
          )}
        </Form>
      </Formik>
    </>
  );
}

export default InputSearch;
