import React from "react";
import './WorkOrder.css'
class WorkOrder extends React.Component {
  render() {
    const { workOrder, worker } = this.props;
    const time = new Date(workOrder.deadline);
    return (
      <div className = "card">
        <div className="order-name">
            <h2>{workOrder.name}</h2> 
        </div>
            <div>{workOrder.description}</div>
        
        
        <div className = "picture">
        {worker ? <img src={worker.image} alt="" /> : ""}<br />
        </div>
        {worker ? worker.name : ""} <br />
        {worker ? worker.companyName : ""} <br />
        {worker ? worker.email : ""}
        <br /> <br />
      </div>
    );
  }
}

export default WorkOrder;
