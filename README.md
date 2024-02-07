# My_reddit_project
The goal of this project is to implement a new version of Reddit WebApp
https://www.reddit.com

WIREFRAME
for the wireframe i decide to inspirate by a mock-up project:
https://www.behance.net/gallery/121471051/Reddit-Redesign

TECNOLOGIES
for this project i use different tecnologie for different purpose:
- Developing with HTML, CSS, JavaScript, React, Redux
- Unit test with Jest and Enzyme
- Version control with Git

FEATURES

API 
for developing this project i need to import the post of Reddit with API but Reddit has 2 APIs: 
- official API: https://www.reddit.com/dev/api/
- undocumented JSON API: https://github.com/reddit-archive/reddit/wiki/JSON
I decide to use the 2nd option that has some limitation, like that you can't do write-operations but it dosen't matter beacause the real Reddit WebApp dosen't give you the opportunity to make.
An other consideration is to access API for free we have the limit of 10 query for minutes.

BACKEND 
for developing backend i decide to use:
- Node.js for server backend
- Express as framework
- MongoDB ad Database
- Bcrypt for hashing password
- Use the environment variable to manage sensitive containers
backend is used just for developing login features

TESTING
- React testing-library
- Jest