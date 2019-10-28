import React from 'react';

class Fetch extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    };


    componentDidMount() {
        fetch('https://www.hatchways.io/api/assessment/work_orders')
            .then(response => { return response.json(); })
            .then(data => {
                //这个地方有必要map吗，还是直接储存json格式，到时候用用的时候data.name, data.description
                //map之后不会处理了 不知道如何给他加key
                
                //data 里我想应该是data:[{name:asad,description:asdsad,workerId:asdsadasd}]
                this.setState({ data }); // data: data
                console.log(this.state.data);
                //这里是直接for loop 拿到所有 所有worker 信息吗
                for (let i = 0; i < data.length; i++) {
                    fetch('https://www.hatchways.io/api/assessment/workers/' + workerId)
                        .then(response => { return response.json(); })
                        .then(data => {
                            let workerData = data.orders.map(i => {
                                return (
                                    <div key={i.id}>
                                        {i.name}
                                        {i.companyName}
                                        {i.email}
                                        {i.image}
                                    </div>
                                )
                            })
                            // 用setstate在data数据后面加上[workername:asdasdasd,worker company:asdasdas]
                            this.setState({ data: WorkerData });
                        })
                }
            })
            .catch(e => console.log(e.message))

        // //这里是直接for loop 拿到所有 所有worker 信息吗
        // for (let i = 0; i < data.length; i++) {
        //     fetch('https://www.hatchways.io/api/assessment/workers/' + workerId)
        //         .then(response => { return response.json(); })
        //         .then(data => {
        //             let workerData = data.orders.map(i => {
        //                 return (
        //                     <div key={i.id}>
        //                         {i.name}
        //                         {i.companyName}
        //                         {i.email}
        //                         {i.image}
        //                     </div>
        //                 )
        //             })
        //             // 用setstate在data数据后面加上[workername:asdasdasd,worker company:asdasdas]
        //             this.setState({ data: WorkerData });
        //         })
        // }

    };

    render() {
        //??????? for loop 该放在哪里 
        // for (let i = 0; i < data.length; i++){

        // };

        const orderData = data.orders.map(i => {
            return (

                <div key={i.id}>
                    {i.name}
                    {i.description}
                    {i.workerId}
                </div>

            )
        })
        return (

            <div>
                {/* <RenderPage name={this.state.data[i]} description= workerId= /> */}
            </div>

        );
    };
};




class RenderPage extends React.Component {

    render() {
        return (
            //这里写渲染后网页的样式
            <div className='single-order-card'>
                {this.props.name}


            </div>
        )
    }

}





export default Fetch;

