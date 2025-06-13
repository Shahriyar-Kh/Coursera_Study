Instructions
Lab instructions
1 of 1 completed


inLabInstructionsPart~fRPG_7ikEe-V1wr_9FjXhQ
​
Task
You've learned how to fetch data in React.

In this code lab, you'll practice fetching some data from the 
randomuser.me
 website's API
.

This code lab's app, once completed, is supposed to show a single customer's data for the Little Lemon Restaurant.

The starter code shows only an h1 heading, with the following text: "Data pending..."

Your task is to complete the data fetching using the fetch() function and to handle the returned Promise object using the then() methods.

In the return statement of the App component, you also need to add an h2 heading showing the customer's name and the customer's image from the data fetched from the random user API.

Here's an example screenshot of the completed app served in the browser.

Customer data including profile picture and name
In other words, the completed app should display the following:

An h1 heading with the text that reads "Customer data".

An h2 heading with the text that reads, for example: "Name: Liam".

An image tag showing an image returned from the fetched data.


Note: Before you begin, make sure you understand how to work with the Coursera Code Lab for the 
Advanced React course
.    

Steps
Step 1: Create the React App  

1.  Open the Project Folder  

Click on the Explorer icon displayed below.

Select Open Folder from the options.

Navigate to and click on your Project Folder.


2. Opening a new terminal   

Click on the Terminal menu.

From the dropdown, select New Terminal.


3.  After opening the new terminal, the terminal panel will appear as shown below, defaulting to the project directory.  


4.  Run the following command to create the React app named fetch-data:    

 npx create-react-app fetch-data

5. The installation process may take some time. Once completed, navigate to the project folder using the following command:  

 cd  fetch-data 

Step 2: Start the React Development Server  

1. Use the following command to start the development server and test the app:

 npm start  

2. You can now view the toggle_app in your browser by navigating to localhost:<exposed port> (eg:3000).  


3. After successfully installing the React app, the project structure will appear as shown below.  


Step 3

Open the App.js file.

The App.js starting code is as follows:

2425
import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {

  };

  React.useEffect(() => {
…  );
}

export default App;

Locate the fetchData() function.

3
const fetchData = () => {

};
Inside the fetchData() function's code block, execute the fetch() function, passing it a single string argument: "https://randomuser.me/api/?results=1".

Step 4
Still inside the fetchData() function, under the fetch() function call, add the following piece of code:

1
.then((response) => response.json())
Step 5
Continuing from the previous step, add another then() call, which takes an arrow function.

The passed-in arrow function should receive a data argument and using that data argument, it should invoke the setUser() function, with the data passed to it.

Step 6
In the return statement of the App component, the starting code is as follows:

12345678
return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
        <h1>Customer data</h1>

    </div>
    ) : (
    <h1>Data pending...</h1>
);
Under the h1 heading, you need to add one line of code:

an h2 heading, with the following code inside: Name:{user.results[0].name.first}

Step 7
In Step 6, you updated the return statement of the App component.

In this step, you need to add another line of code under the newly-added h2.

You need to add an img element, with the src attribute holding the following code:

{user.results[0].picture.large}

Additionally, you need to add an alt attribute, as follows:

1
alt=""
Remember to self-close the img tag.

Step 8.

 1. To view the output, click on the Browser Preview icon located on the left panel. It is the last icon in the panel.      


 In your browser, enter: http://localhost:3000 to see the output. Verify that the completed app, behaves as follows:

It shows a heading that reads: "Customer data".

It shows a subheading, that shows a user name. For example, "Name: Ann".

It shows an image of that user under the name.

Step 9.

Ensure the lab environment allows fetch() calls to external APIs  Verify the API is functional and accessible by testing it outside the lab.  

Ensure there are no syntax issues in the code by running `npm run lint`.  

Browser preview not workingEnsure the development server is running and Verify theterminal shows no errors.