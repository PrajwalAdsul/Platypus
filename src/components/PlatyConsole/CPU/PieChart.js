import React, { Component } from "react";
import { render } from "react-dom";
import { VictoryPie } from "victory";

export default class PieChart extends Component {
  constructor(props){
  	super(props);
  }
  render() {
    return <VictoryPie   colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
     data={[
    { x: "user", y: this.props.user },
    { x: "nice", y: this.props.nice },
    { x: "system", y: this.props.system },
    { x: "idle", y: this.props.idle},
    { x: "iowait", y: this.props.iowait },
    { x: "irq", y: this.props.irq },
    { x: "softirq", y: this.props.softirq },
    { x: "steat", y: this.props.steat},
    { x: "guest", y: this.props.guest },
    { x: "guest_nice", y: this.props.guest_nice},
    
  ]}/>;
  }
}