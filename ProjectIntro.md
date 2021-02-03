<h1>"Bucket List"</h1>
<h3>a wishlist of travel destinations</h3>

<h3>Description</h3>
The Bucket List application will allow users to generate a list if places where they want to travel, and maintain that list as they explore a post-COVID world.

<h3>User Story</h3>
As worldwide travel has suffered a significant decline during the COVID-19 pandemic, many of us look forward to the opportunity to travel again. Bucket List allows users to keep a record of places they'd like to go.

As flexible work environments have become more widely available, many individuals want to travel more frequently throughout the year (and bring their work along!).

When dreaming of vacation, people often forget the details of their early destination-research. The advanced features in Bucket List allows users to maintain these notes and make additional notes before the trip.


<h3>How It Works</h3>
The application will ask users to enter places through a user input field, and then add those places to list of destinations.

Within the input field, the application will use an external tool, Algolio, https://community.algolia.com/, to auto-populate locations as the user inputs the text.
(For example, if the user enters "New", then the options of New York City, New Orleans, Newark, etc will automatically show in the dropdown field as options for the user to select).

After a user has traveled to a place, they can move the location to their respective "Accomplished!" list.

In addition, a video or other visual feature will display videos of favorite destinations (in carousel or other feature-rich format).  
The application will use bideo.com to present this effect. (https://rishabhp.github.io/bideo.js/)


<h3>Workflow</h3>
Homepage: User has 2 options : 1) Write a Travel Review;  2) Search Travel Review

Page 2) Write Travel Review: 
has columns/fields: a) writer  a) city (incorporates Algolia);  b) amentities (hotels, restaurants, transportation)   c) things to do (radio dials for recreational activities

Page 3) Search Travel Review:
has options for searching by city, content (specific fields for search TBD)

<h3>Future Development</h3>
After achieving the MVP, the team will consider adding features that allow the user to enter activities, sights, or other data fields for each location. Then create additional recommendations for similar travel experiences. 

<h3>The requirements for Project #2 are as follows:</h3>
<ul>
<li>Must use a Node and Express Web Server
<li>Must be backed by a MySQL Database with a Sequelize ORM
<li>Must have both GET and POST routes for retrieving and adding new data
<li>Must be deployed using Heroku (with Data)
<li>Must utilize at least one new library, package, or technology that we haven’t discussed <i>(Algolio)</i>
<li>Must have a polished frontend / UI:  <i>(will use handlebars for the view, and bideo to present enhanced video.)</i>
<li>Must have folder structure that meets MVC Paradigm
<li>Must meet good quality coding standards (indentation, scoping, naming)
<li>Must not expose sensitive API key information on the server

OPTIONAL Requirements
<li>incorporate authentication - <i>YES, we will incorporate this</i>
<li>Use public dataset - <i>NO, we will not use a public dataset this other than a seed.sql file</i>
<li>create migration strategy for sharing data across team members - <i>NOT YET sure. We did find dataworld.com as a site for creating and dharing data projects amongst team members.</i>
