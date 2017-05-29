# portlets
3 portlets for demonstrating 
1. Streaming API, 
2. CRUD operations on tree data, and 
3. Demographic statistics

All these portlets can be minimized, maximized and resized.

---------------------------------------------------------------------------
Streaming API Demo:
* Currently I am using the api http://rest.learncode.academy/api/reacttest/tweets

* Though the API doesn't provide streaming data, I have implemented the UI
to handle & display the incoming data.

* The api will be called every 2 seconds to continously receive data.
The streaming demo can be stopped or started by using the controls given on top of this portlet.

---------------------------------------------------------------------------
CRUD operations on Tree Data:
1. Tree will be constructed using initial data. This can be deleted and a new tree can be constructed based on user input.
2. A new Root can be added to the tree.
3. A new child can be added to a tree node.
4. Name of the tree node can be modified.
5. Tree node can be deleted. Deleting a node will also delete its children, if any.
6. Click on any node to display or hide its children, if any.

---------------------------------------------------------------------------
Demographic statistics:
This portlet is still under construction.

---------------------------------------------------------------------------
Steps to execute:
1. Install Node.js
2. Clone this repository
3. Open Command Prompt from the folder where this repository is cloned
4. execute command: npm install
5. execute command: npm start
6. Open browser and navigate to: http://localhost:1234/

 

