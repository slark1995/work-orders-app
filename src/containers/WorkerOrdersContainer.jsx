import React from "react";
import WorkOrder from "../components/WorkOrder.jsx";
import { fetchWorkerOrders, fetchWorker } from "../lib/Api.js";
import "./WorkerOrdersContainer.css"
class WorkerOrdersContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      workerOrders: [],
      workers: {},
      queryStr: ""
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    this.setState({ queryStr: e.target.value });
  }

  fetchData() {
    // fetch all work orders
    fetchWorkerOrders().then(data => {
      const workerOrders = data.orders;

      // fetch worker for each work order
      workerOrders.forEach(workerOrder => {
        const { workerId } = workerOrder;

        // fetch single worker
        fetchWorker(workerId).then(workerData => {
          const worker = workerData.worker;
          const workers = this.state.workers;

          // update worker dictionary using fetched worker
          workers[worker.id] = worker;

          this.setState({ workers });
          // one line solution
          // this.setState({ workers: {...this.state.workers, [worker.id]: worker }});
        });
      });

      this.setState({ workerOrders });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    
    const { workerOrders, workers } = this.state;
    const orders = workerOrders.filter(workOrder => workOrder.name.includes(this.state.queryStr))
    // .sort()
      .map(workOrder => (
        <WorkOrder
          key={workOrder.id}
          workOrder={workOrder}
          worker={workers[workOrder.workerId]}
        />
      ));

    // console.log(workerOrders, workers)
    return (
        <div className = "page">  
            search by order name:<input value={this.state.queryStr} onChange={this.onSearch}/>
            <div className =  "cards">
            {orders}
            </div>
        </div>
    );
  }
}

export default WorkerOrdersContainer;
