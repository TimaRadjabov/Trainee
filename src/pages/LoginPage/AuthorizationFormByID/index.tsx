import React from "react";

import { Formik, Form } from "formik";

import * as yup from "yup";

import { FormattedMessage, useIntl } from "react-intl";

import { AuthorizationInput } from "../AuthorizationInput";

import { FormButton } from "../../../uikit/FormButton";

export const AuthorizationFormByID = () => {
  const IDRegex = /^[a-zA-Z0-9]+$/;
  const lowercaseRegex = /(?=.*[a-z])[^\s]/;
  const uppercaseRegex = /(?=.*[A-Z])[^\s]/;
  const numberRegex = /(?=.*[0-9])[^\s]/;
  const intl = useIntl();

  const validationSchema = yup.object().shape({
    passportID: yup
      .string()
      .max(30, intl.formatMessage({id: "invalidCharacters"}))
      .matches(IDRegex, intl.formatMessage({id: "invalidCharacters"})),
      password: yup
      .string()
      .min(6, intl.formatMessage({id: "sixCharacters"}))
      .max(20, intl.formatMessage({id: "twentyCharacters"}))
      .matches(lowercaseRegex, intl.formatMessage({id: "oneLowerCase"}))
      .matches(uppercaseRegex, intl.formatMessage({id: "oneUpperCase"}))
      .matches(numberRegex, intl.formatMessage({id: "oneNumber"})),
  });

  
  return (
    <Formik
      initialValues={{
        passportID: "",
        password: "",
      }}
      validateOnBlur={true}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        resetForm();
        setSubmitting(false);
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {({ values, isValid, handleSubmit }) => (
        <Form>
          <AuthorizationInput
            type="text"
            className="passportID"
            name="passportID"
            id="passportID"
            placeholder={intl.formatMessage({id: "passportNumber"})}
            label={intl.formatMessage({id: "passportNumber"})}
          />

          <AuthorizationInput
            type="password"
            name="password"
            id="password"
            className="password-input"
            placeholder={intl.formatMessage({id: "password"})}
            label={intl.formatMessage({id: "password"})}
          />
          <FormButton
            disabled={
              !isValid ||
              values.passportID.length === 0 ||
              values.password.length === 0
            }
            onClick={handleSubmit}
          >
            <span><FormattedMessage id="logInTitle" /></span>
          </FormButton>
        </Form>
      )}
    </Formik>
  );
};
