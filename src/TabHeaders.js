import React from "react";
import TabHeaderButton from "./TabHeaderButton";

const TabHeaders = ({ tabs, classTabHeader }) => (
  <div className="tab-headers">
    <ul
      className={
        classTabHeader ? `headers-buttons ${classTabHeader}` : "headers-buttons"
      }
    >
      {React.Children.map(tabs, ({ props: { id, title } }) => (
        <TabHeaderButton id={id} title={title} />
      ))}
    </ul>
  </div>
);

export default TabHeaders;
