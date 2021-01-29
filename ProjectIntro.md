<h1>"Bucket List"</h1>
<h3>a wishlist of travel destinations</h3>


The Bucket List application will allow users to generate a list if places where they want to travel. 

The application will ask users to enter places through a user input field, and then add those places to list of destinations.

Within the input field, the application will use an external tool, Algolio, https://community.algolia.com/, to auto-populate locations as the user inputs the text.
(For example, if the user enters "New", then the options of New York City, New Orleans, Newark, etc will automatically show in the dropdown field as options for the user to select).

After a user has traveled to a place, they can move the location to their respective "Accomplished!" list.

In addition, a video or other visual feature will display videos of favorite destinations (in carousel or other feature-rich format).  
The application will use bideo.com to present this effect. (https://rishabhp.github.io/bideo.js/)


<h3>The requirements for Project #2 are as follows:</h3>
<ul>
<li>Must use a Node and Express Web Server
<li>Must be backed by a MySQL Database with a Sequelize ORM
<li>Must have both GET and POST routes for retrieving and adding new data
<li>Must be deployed using Heroku (with Data)
<li>Must utilize at least one new library, package, or technology that we haven’t discussed (***TACKLE this EARLY)
<li>Must have a polished frontend / UI:  will use handlebars for the view, and bideo to present enhanced video.
<li>Must have folder structure that meets MVC Paradigm
<li>Must meet good quality coding standards (indentation, scoping, naming)
<li>Must not expose sensitive API key information on the server

OPTIONAL Requirements
<li>incorporate authentication - YES, we will incorporate this
<li>Use public dataset - NO, we will not sue this other than a seed.sql file
<li>create migration strategy for sharing data across team members - NOT YET sure. We did find dataworld.com as a site for creating and dharing data projects amongst team members.