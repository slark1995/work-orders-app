const Api = require("./Api")
// @ponicode
describe("Api.fetchWorkerOrders", () => {
    test("0", () => {
        let callFunction = () => {
            Api.fetchWorkerOrders()
        }
    
        expect(callFunction).not.toThrow()
    })
})
