import React from "react";
import TabHeaders from "./TabHeaders";
import TabPanel from "./TabPanel";

export const TabContext = React.createContext();

class Tab extends React.PureComponent {
  static TabItem = ({ children }) => (
    <React.Fragment>{children}</React.Fragment>
  );

  findPanelToShow = id => {
    const { children } = this.props;
    const child = React.Children.toArray(children).find(
      ({ props }) => props.id === id
    );
    return child;
  };

  state = {
    selectedTab: this.props.defaultSelected
  };

  onSelectTab = id => {
    this.setState({ selectedTab: id });
  };

  componentDidUpdate = prevProps => {
    if (this.props.onSelectTab) {
      this.props.onSelectTab(this.state.selectedTab);
    }
  };

  render() {
    const {
      children,
      classNameTabContainer,
      classTabName,
      classActiveTab,
      classTabHeader
    } = this.props;
    const { selectedTab } = this.state;
    const selectedPanel = this.findPanelToShow(selectedTab);

    return (
      <TabContext.Provider
        value={{
          onSelectTab: this.onSelectTab,
          selectedTab,
          classTabName,
          classActiveTab
        }}
      >
        <div
          className={
            classNameTabContainer
              ? `tab-container ${classNameTabContainer}`
              : "tab-container"
          }
        >
          <TabHeaders tabs={children} classTabHeader={classTabHeader} />
          <TabPanel panel={selectedPanel} />
        </div>
      </TabContext.Provider>
    );
  }
}

export default Tab;
