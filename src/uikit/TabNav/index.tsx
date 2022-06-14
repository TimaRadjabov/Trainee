import React from "react";

import classNames from "classnames";

import "./TabsStyles.css";

interface ITabNavProps {
  className?: string;
  tabs: string[];
  selected: string;
  setSelected: (tab: string) => void;
}

export const TabNav: React.FC<ITabNavProps> = ({
  children,
  className,
  tabs,
  selected,
  setSelected,
}) => (
  <div className="tabNav__wrapper">
    <ul className="tabNav">
      {tabs.map((tab) => {
        const active = tab === selected ? "active" : "";

        return (
          <li
            className={classNames(`tabNav__item ${active}`, className)}
            key={tab}
          >
            <button
              className="tabNav__link"
              onClick={() => setSelected(tab)}
              onKeyDown={() => setSelected(tab)}
              type="button"
            >
              {tab}
            </button>
          </li>
        );
      })}
    </ul>
    {children}
  </div>
);
