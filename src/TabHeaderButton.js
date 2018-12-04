import React from "react";

import { TabContext } from "./Tab";

const getStyle = (selectedTab, id, classTabName, classActiveTab) => {
  let style = "tab-header-button";
  if (classTabName) style = `tab-header-button ${classTabName}`;
  if (selectedTab === id && !classActiveTab) {
    style = "tab-header-button activeTab";
  } else if (selectedTab === id && classActiveTab) {
    style = `${style} ${classActiveTab}`;
  }

  return style;
};

const TabHeaderButton = ({ id, title }) => (
  <TabContext.Consumer>
    {({ onSelectTab, selectedTab, classTabName, classActiveTab }) => (
      <li>
        <button
          className={getStyle(selectedTab, id, classTabName, classActiveTab)}
          onClick={() => onSelectTab(id)}
        >
          {title}
        </button>
      </li>
    )}
  </TabContext.Consumer>
);

export default TabHeaderButton;
