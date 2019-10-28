export const fetchWorkerOrders = () => {
    return fetch('https://www.hatchways.io/api/assessment/work_orders')
        .then(response => { return response.json(); })
        .catch(e => console.log(e.message));
}

export const fetchWorker = (id) => {
    return fetch(`https://www.hatchways.io/api/assessment/workers/${id}`)
        .then(response => { return response.json(); })
        .catch(e => console.log(e.message));
}
