# Optix MovieAPI
This repo holds all of the files for the Optix take home test.
The test was to create an API that queries a database of my choosing that contains movie data and create a frontend to display the information.

## The Tech Used
### The Database
I chose to use postgresql for my database as it was relatively lightweight and simple to setup.

### The API
Since I was told Optix are mostly working in .NET I decided to use the .NET 6 framework for my API. I have a good amount of experience with C# so this did not take much time to get something working.

### The Frontend
For the frontend I went for a React approach. This is a framework/library I am fond of and combined with tailwind css, I think provides an easy way to create good looking reactive applications.

### Deployment
I have created docker files for the frontend application and the .NET API. There is also an SQL file that is read during the postgresql database setup.
A docker compose file has also been made for easy build and deployment to try out this code.

To run all of the applications togeter, simply:
1. Clone the repo into your local area.
2. Open a terminal in the root of the cloned repo.
3. Run the command `docker compose build`. This will build the react app and .NET API.
4. Run the command `docker compose up`, to launch all of the services.
5. Open the your localhost to port 5173 to view the react applpication `http://localhost:5173`.
