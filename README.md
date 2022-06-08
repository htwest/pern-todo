Standard PERN stack Todo App

Used to test PERN deployment on Heroku.

-- Deployment Steps --

1.  Make sure Root Dir has a .git file

2.  Move sure Server files are in Root Dir

    - Heroku Requires package.json in Root Dir

3.  In /Client run $npm run build

4.  Set up ENV's in index.js

    - Require "Paths"
    - Set PORT to process.env.PORT
    - set up app to run on build in production enviroment: \* if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.join(\_\_dirname, "client/build")));
      }

5.  $npm install dotenv

6.  Create .env file and set variables

    - PG_USER
    - PG_PASSWORD
    - PG_HOST
    - PG_PORT
    - PG_DATABASE

7.  Create devloper configuration object to set developer Pool variables

    - const devConfig = {
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      host: process.env.PG_HOST,
      database: process.env.PG_DATABASE,
      port: process.env.PG_PORT,
      };

8.  Create production configuration object to set Production Pool variables

    - const proConfig = {
      connectionString: process.env.DATABASE_URL, // comes from Heroku Addon
      };

9.  Configure pool variable to use proConfig in a production enviroment

    - const pool = new Pool(
      process.env.NODE_ENV === "production" ? proConfig : devConfig
      );
