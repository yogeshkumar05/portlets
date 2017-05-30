# Portlets Demo
3 portlets for demonstrating 
1. Streaming API, 
2. CRUD operations on tree data, and 
3. Demographic Graph statistics

All the portlets can be minimized, maximized and resized.


Technologies Used:
---------------------------------------------------------------------------
* HTML
* CSS
* JavaScript ES6
* ReactJS
* SCSS
* Redux
* Bootstrap
* JSON
* Highcharts

Streaming API Demo:
---------------------------------------------------------------------------
* Currently I am using the api http://rest.learncode.academy/api/reacttest/tweets

* Though the API doesn't provide streaming data, I have implemented the UI
to handle & display the incoming data.

* The api will be called every 2 seconds to continously receive data.
The streaming demo can be stopped or started by using the controls given on top of this portlet.

CRUD operations on Tree Data:
---------------------------------------------------------------------------
* Tree will be constructed using initial data. This can be deleted and a new tree can be constructed based on user input.
* A new Root can be added to the tree.
* A new child can be added to a tree node.
* Name of the tree node can be modified.
* Tree node can be deleted. Deleting a node will also delete its children, if any.
* Click on any node to display or hide its children, if any.


Demographic statistics:
---------------------------------------------------------------------------
* I have used the data from https://data.cityofnewyork.us/api/views/kku6-nxdu/rows.json?accessType=DOWNLOAD
* User can zoom in on any particular section of the graph by selecting (supports only rectangular selection)
* Data is plotted using Highcharts

Steps to execute:
---------------------------------------------------------------------------
1. Install Node.js
2. Clone this repository
3. Open Command Prompt from the folder where this repository is cloned
4. execute command: npm install
5. execute command: npm run dev
6. Open browser and navigate to: http://localhost:1234/

---------------------------------------------------------------------------



 

