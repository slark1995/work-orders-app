
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

what does the app do:
* Displays all the work orders (you should also display the worker information that
corresponds with each order
* An input field that can filter work orders by worker name
  ○ Required: input field should have id ​"name-input"
* A switch or toggle that lets you sort all the work orders by deadline (earliest first,
or latest first - default should be earliest first)
  ○ Required: switch input field should have id ​"deadline-input"


The first API returns all the work orders in the database. Each work order has:
* id (String) - a unique id of the order
* name (String) - the name of the order
* description (String) - a short description about the order
* deadline (integer) - the deadline for the order in epoch time (seconds)
* workerId (integer) - the worker id that is responsible for this worker order


The second API returns information about a worker given their id. Each worker has:
* id (integer) - a unique id of the worker
* name (String) - the name of the worker
* email (String) - the email of the worker
* companyName (String) - the company of the worker
* image (String) - an image for the worker
```
Request:
Route: ​XXX 
Method: ​GET
Response: Body:
{
"orders"​: [{
​"id"​: ​"480cb439",​
"name"​: ​"Worker Order Name",​
"description"​: ​"This is a description for the work order...",​
 "deadline"​: ​1558249206,​
"workerId"​: ​4 }, ...
] }
Status:200
#​ epoch time in seconds
```


```
Request:
Route: XXX
Method: ​GET
Parameters:
​worker_id​: A url parameter that corresponds to the worker id
Response: Body:
{
"worker"​: {
​"id"​:4​,
"name"​: ​"Ashien Galier",​
"email"​: "​ agalier4@wordify.com"​,
"companyName"​: ​"Wordify"​,
"image": "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
} }
Status:200
```
