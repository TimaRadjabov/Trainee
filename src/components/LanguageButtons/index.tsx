import React, { useContext } from "react";

import { Button } from "../../uikit/Button";

import { locales } from "../../translation/locales";

import { providerContext } from "../../translation/Provider";

import "./LanguageButtonsStyles.css";

export const LanguageButtons = () => {
  const context = useContext(providerContext);
  return (
    <div>
      {Object.values(locales).map((btnContent) => (
        <Button
          key={btnContent}
          className={`langButton ${
            context.isActive === btnContent ? "selectedLangBtn" : ""
          }`}
          onClick={() => context.setIsActive(btnContent)}
          value={context.isActive}
        >
          {btnContent.charAt(0).toUpperCase() + btnContent.slice(1, 2)}
        </Button>
      ))}
    </div>
  );
};
