import React from "react";

const TabPanel = ({ panel }) => (
  <div className="panel">{React.cloneElement(panel, {})}</div>
);

export default TabPanel;
