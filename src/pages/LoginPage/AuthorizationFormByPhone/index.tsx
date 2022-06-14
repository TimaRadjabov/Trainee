import React, {
  FormEvent,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
} from "react";

import { Formik, Form } from "formik";

import * as yup from "yup";

import { FormattedMessage, useIntl } from "react-intl";

import { AuthorizationInput } from "../AuthorizationInput";

import { FormButton } from "../../../uikit/FormButton";

import "./AuthorizationFormStyle.css";

export const AuthorizationFormByPhone = () => {
  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const numberRegex = /(?=.*[0-9])/;
  const phoneRegex =
    /^((\+375)[ ]([0-9]){2}[ ]([0-9]){3}[-]([0-9]){2}[-]([0-9]){2})$/;

  const pattern = "+375 XX XXX-XX-XX";
  const slots = new Set("X");

  const prevSlot = ((j) =>
    // eslint-disable-next-line
    Array.from(pattern, (c, i) => (slots.has(c) ? (j = i + 1) : j)))(0);
  const first = pattern.split("").findIndex((c) => slots!.has(c));
  const accept = new RegExp("\\d", "g");

  const [value, setValue] = useState("");
  const [startValue, setStartValue] = useState(pattern);
  const [mask, setMask] = useState("");
  const [placeholder, setPlaceholder] = useState(pattern);
  const [back, setBack] = useState(false);
  const [focused, setFocused] = useState(false);
  const [label, setLabel] = useState(false);
  const intl = useIntl();
  const ref = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    setPlaceholder(intl.formatMessage({id: "phoneLabel"}));
  }, [intl]);

  const clean = (input: string | RegExpMatchArray): string[] => {
    let checkInput = input;
    checkInput = (checkInput as string).match(accept!) || [];
    return Array.from(pattern, (c) =>
      checkInput[0] === c || slots.has(c)
        ? (checkInput as RegExpMatchArray).shift() || c
        : c
    );
  };

  const format = (): void => {
    const [i, j] = [
      ref.current!.selectionStart!,
      ref.current!.selectionEnd!,
    ].map((item) => {
      let checkItem = item;
      checkItem = clean(ref.current!.value.slice(0, checkItem)).findIndex(
        (c: string) => slots!.has(c)
      );
      return item < 0
        ? prevSlot[prevSlot.length - 1]
        : back
        ? prevSlot[checkItem - 1] || first
        : checkItem;
    });
    ref.current!.value = clean(ref.current!.value).join("");
    ref.current!.setSelectionRange(i, j);
    setBack(false);
  };

  const maskHandler = (inputValue: string): void => {
    let val = "";
    // eslint-disable-next-line
    for (const letter of inputValue.slice(4)) {
      if (letter === "X") break;
      val += letter;
    }

    setMask(`+375 ${val}`);
  };

  const onInput = (event: FormEvent<HTMLInputElement>): void => {
    format();

    const { value } = event.target as HTMLInputElement;
    maskHandler(value);
    setValue(value);
    setStartValue(value);
  };

  // eslint-disable-next-line
  const onFocus = ( setFieldValue: any, event: FormEvent<HTMLInputElement> ): void => {
    format();
    const { value } = event.target as HTMLInputElement;

    setFieldValue("phone", startValue);

    !focused && maskHandler("");
    setFocused(true);

    setTimeout(() => {
      mask.length === 5
        ? ref.current!.setSelectionRange(5, 5)
        : ref.current!.setSelectionRange(mask.length - 1, mask.length - 1);
    }, 0);
    setLabel(true);
  };

  const onKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>): void =>
    setBack(key === "Backspace");

  const onBlur = (): void => {
    if (ref.current!.value === pattern) {
      setValue("");
      ref.current!.value = "";
    }
    setLabel(false);
    setFocused(!!value);
  };

  const validationSchema = yup.object().shape({
    phone: yup.string().matches(phoneRegex, intl.formatMessage({id: "invalidPhoneNumber"})),
    password: yup
      .string()
      .min(6, placeholder === "Phone number" ? "minimum 6 characters required" : "mindestens 6 Zeichen erforderlich")
      .max(20, intl.formatMessage({id: "twentyCharacters"}))
      .matches(lowercaseRegex, intl.formatMessage({id: "oneLowerCase"}))
      .matches(uppercaseRegex, intl.formatMessage({id: "oneUpperCase"}))
      .matches(numberRegex, intl.formatMessage({id: "oneNumber"})),
  });

  

  return (
    <Formik
      initialValues={{
        phone: "",
        password: "",
      }}
      validateOnBlur={true}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        resetForm();
        setSubmitting(false);
        setMask("");
        setStartValue(pattern);
      }}
      validationSchema={validationSchema}
    >
      {({ values, isValid, handleSubmit, setFieldValue }) => (
        <Form className="form">
          <label
            className={
              label || values.phone.length !== 0 ? "label-active" : "label"
            }
          >
            <FormattedMessage id="phoneLabel" />
          </label>
          <AuthorizationInput
            type="tel"
            name="phone"
            id="phone"
            placeholder={placeholder}
            ref={ref}
            onInput={onInput}
            onFocus={(event) => onFocus(setFieldValue, event)}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
          />
          <p className="mask">{ref.current?.value ? mask : ""}</p>
          <AuthorizationInput
            type="password"
            name="password"
            className="password-input"
            id="password"
            placeholder={intl.formatMessage({id: "password"})}
            label={intl.formatMessage({id: "password"})}
          />
          <FormButton
            disabled={
              !isValid ||
              values.phone.length === 0 ||
              values.password.length === 0
            }
            onClick={handleSubmit}
          >
            <span>
              <FormattedMessage id="logInTitle" />
            </span>
          </FormButton>
        </Form>
      )}
    </Formik>
  );
};
