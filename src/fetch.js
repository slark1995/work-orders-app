import React from 'react';

class Fetch extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    };


    componentWillMount() {
        fetch('https://www.hatchways.io/api/assessment/work_orders')
        .then(response => { return response.json(); })
        .then(data => {
            let mydata = data.orders.map(i => {
                return (
                    
                    <div key = {i.id}>
                        {i.id} 
                        {i.description}
                    
                    </div>

                )
            })
            this.setState({data: mydata});
            // console.log(this.state.data);
        })


    };


    render() {
        return (
            <div>
                Work order {this.state.data}
            </div>

        );
    };


};


export default Fetch;

