import React, { Component } from "react";
import Highcharts from "highcharts";
class FeedbackBox extends Component {
  componentDidUpdate() {
    this.drawChart();
  }
  componentDidMount() {
    this.drawChart();
  }
  drawChart() {
    let allSkills = [];
    Object.keys(this.props.data.skill).map(skilleach => {
      allSkills = [
        ...allSkills,
        { name: skilleach, y: this.props.data.skill[skilleach] }
      ];
      return null;
    });
    let chartOptions = {
      chart: {
        renderTo: this.props.data.name,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie"
      },

      title: {
        text: "Skills",
        y: 10
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.y}</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.y}/5",
            style: {
              color:
                (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                "black",
              fontFamily: "Helvetica Neue"
            }
          },
          showInLegend: true
        }
      },
      series: [
        {
          animation: false,
          name: "Score",
          colorByPoint: true,
          data: allSkills
        }
      ]
    };
    let chart = new Highcharts.Chart(chartOptions);
  }

  render() {
    return (
      <div key={this.props.index} className="details">
        <div className="candidate-name">
          {this.props.data.name}
          <button
            value={this.props.data.id}
            className="delete"
            name={this.props.index}
            onClick={this.props.removeFeedback}
          >
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="query-box">
          <div className="candidate-query">Applying for:</div>
          <div className="candidate-post candidate-desg">
            {this.props.data.designation}
          </div>

          <div className="candidate-date">
            {this.props.data.date
              .toString()
              .substring(0, 10)
              .split("-")
              .reverse()
              .join("-")}
          </div>
        </div>
        <div className="query-box">
          <div className="candidate-query">Experience:</div>
          <div className="candidate-post">
            {this.props.data.exp_year} years {this.props.data.exp_month} months
          </div>
        </div>
        <div className="query-box">
          <div className="candidate-query">Status: </div>
          <div className="candidate-post">{this.props.data.status}</div>
        </div>
        <div className="chart-space">
          <div className="chart" id={this.props.data.name} />
        </div>
        <div className="query-box">
          <div className="candidate-query">Comments: </div>
          <div className="candidate-post candidate-desg">
            {this.props.data.comments}
          </div>
          <div className="candidate-date">
            ~{this.props.data.interviewer_name}
          </div>
        </div>
        <div className="query-box">
          <div className="candidate-query">Resume: </div>
          <div className="candidate-post">
            <a
              rel="noopener noreferrer"
              href={this.props.data.filePath}
              target="_blank"
            >
              <button className="proceed-button download-link">Download</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackBox;
