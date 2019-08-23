import React, { Component } from "react";
import SearchBar from "./SearchBar";
import FeedbackBox from "./FeedbackBox";
import { connect } from "react-redux";
import { Button, Panel } from "react-bootstrap";
import { search, findByName, removeFeedbackConfirmed } from "../../actions/user";
import { confirmAlert } from "react-confirm-alert";

class ViewAll extends Component {
  state = {
    open: false,
    selectedOption: []
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  search = e => {
    const index = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.props.search(index, value);
    this.setState({ selectedOption: [] });
  };
  findByName = searchNames => {
    if (searchNames.length === 0) this.props.refresh();
    else this.props.findByName(searchNames);
  };
  removeFeedback = e => {
    const index = e.currentTarget.name;
    const id = e.currentTarget.value;
    confirmAlert({
      title: "Remove feedback",
      message: "Are you sure you want to remove this feedback?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.removeFeedbackConfirmed(index, id)
        },
        {
          label: "No",
          onClick: () => { }
        }
      ]
    });
  };
  render() {
    const { store } = this.props;
    return (
      <div>
        <div className="feedback-title">Feedbacks</div>
        <div className="feedback-view">
          {store.userData.data.length > 0 ? (
            <div>
              <div className="search-bar">
                <div className="mobile">
                  {!this.state.open ? (
                    <div className="filter">Show Filters</div>
                  ) : (
                      <div className="filter">Hide Filters</div>
                    )}
                  <div className="toggle-div">
                    <Button
                      className="toggle"
                      onClick={() => this.setState({ open: !this.state.open })}
                    >
                      {!this.state.open ? (
                        <i class="fas fa-angle-double-down" />
                      ) : (
                          <i class="fas fa-angle-double-up" />
                        )}
                    </Button>
                  </div>
                  <br />
                  <Panel
                    id="collapsible-panel-example-1"
                    expanded={this.state.open}
                  >
                    <Panel.Collapse>
                      <Panel.Body>
                        <SearchBar
                          selectedOption={this.state.selectedOption}
                          handleChange={this.handleChange}
                          findByName={this.findByName}
                          data={store.userData.data}
                          searchColumn={store.userData.searchColumn}
                          search={this.search}
                          searchBar={store.userData.searchBar}
                        />
                      </Panel.Body>
                    </Panel.Collapse>
                  </Panel>
                </div>
                <div className="pc">
                  <SearchBar
                    selectedOption={this.state.selectedOption}
                    handleChange={this.handleChange}
                    findByName={this.findByName}
                    data={store.userData.data}
                    searchColumn={store.userData.searchColumn}
                    search={this.search}
                    searchBar={store.userData.searchBar}
                  />
                </div>
              </div>
              <div className="content">
                {store.userData.data.map((data, index) => (
                  <FeedbackBox
                    removeFeedback={this.removeFeedback}
                    data={data}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ) : (
              <div className="notice">
                <i className="fas fa-frown sad-emoji" />
                <br />
                No feedbacks yet.
            </div>
            )}
        </div>
      </div>
    );
  }
}
function mapStatetoProps(state) {
  return {
    store: state
  };
}
export default connect(
  mapStatetoProps,
  { search, findByName, removeFeedbackConfirmed }
)(ViewAll);
