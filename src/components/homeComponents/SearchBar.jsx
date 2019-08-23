import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Select from "react-select";

class SearchBar extends Component {
  sendData = () => {
    this.props.findByName(this.props.selectedOption);
  };
  componentDidUpdate() {
    ReactTooltip.rebuild();
  }
  render() {
    let applicantNames = [];
    this.props.data.map(data => {
      applicantNames.push({
        label: data.name,
        value: data.name
      });
      return null;
    });
    return (
      <div>
        <ReactTooltip />
        <div className="search-content">
          <div className="search-bar-heading heading">Designations</div>
          {this.props.searchColumn.designation.map(designation => (
            <div className="search-bar-content">
              {designation}

              <button
                data-tip={"Show applicants with designation: " + designation}
                name="designation"
                value={designation}
                onClick={this.props.search}
                className="search-button"
              >
                <i
                  id={
                    this.props.searchBar.designation === designation
                      ? "active-button"
                      : "inactive-button"
                  }
                  className="fas fa-angle-double-right"
                />
              </button>
            </div>
          ))}
        </div>
        <div className="search-content">
          <div className="search-bar-heading heading">Status</div>
          {this.props.searchColumn.status.map(status => (
            <div className="search-bar-content">
              {status}
              <button
                data-tip={"Show applicants with status: " + status}
                name="status"
                value={status}
                onClick={this.props.search}
                className="search-button"
              >
                <i
                  id={
                    this.props.searchBar.status === status
                      ? "active-button"
                      : "inactive-button"
                  }
                  className="fas fa-angle-double-right"
                />
              </button>
            </div>
          ))}
        </div>
        <div className="search-content">
          <div className="search-bar-heading heading">Search By Name</div>
          <div className="drop-down-content">
            <Select
              value={this.props.selectedOption}
              onChange={this.props.handleChange}
              isMulti={true}
              options={applicantNames}
            />
          </div>
          <button onClick={this.sendData} className="search-by-name-button">
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
