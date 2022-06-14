import React from "react";

import { FormattedMessage } from "react-intl";

import dollar from "../../uikit/static/dollarVector.svg";

import location from "../../uikit/static/location.svg";

import contacts from "../../uikit/static/phone.svg";

export const pictogramData = [
  {
    componentRef: location,
    text: <FormattedMessage id="firstPictogram" />,
    id: 1,
    link: "atms",
  },
  {
    componentRef: dollar,
    text: <FormattedMessage id="secondPictogram" />,
    id: 2,
    link: "rates",
  },
  {
    componentRef: contacts,
    text: <FormattedMessage id="thirdPictogram" />,
    id: 3,
    link: "contacts",
  },
];
