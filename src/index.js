import React from "react";
import ReactDOM from "react-dom";

import Tab from "./Tab";
import "./styles.css";

const onSelectTab = id => console.log(id);

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="custom-tabs">
        <Tab
          defaultSelected="tab1"
          classNameTabContainer="notebook-tab"
          classTabName="note-tab"
          classActiveTab="note-selected-tab"
          classTabHeader="notes-headers-tab"
          onSelectTab={onSelectTab}
        >
          <Tab.TabItem title="tab 1" id="tab1">
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </Tab.TabItem>
          <Tab.TabItem title="tab 2" id="tab2">
            <p>hello world 2</p>
          </Tab.TabItem>
          <Tab.TabItem title="tab 3" id="tab3">
            <p>hello world 3</p>
          </Tab.TabItem>
          <Tab.TabItem title="tab 4" id="tab4">
            <p>hello world 4</p>
          </Tab.TabItem>
        </Tab>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
