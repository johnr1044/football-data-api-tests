Football-Data API Automated Testing (Playwright + Axios)
    This project is a Playwright API automation suite that validates core endpoints from the Football-Data.org
 REST API. It was built to demonstrate practical API testing skills including endpoint validation, schema checks, filtering, and environment variable management with secure API keys.

 ### Project Overview

    The Football-Data API provides real-time and historical data for global football leagues, matches, and teams.
This test suite focuses on verifying data consistency, response integrity, and key business logic from three major endpoints:

Test Suite      Endpoint          Focus

Areas            /v4/areas     Confirm global area list and validate individual country details
Competitions    /v4/competions  Ensures competition list structure and presence of known leagues
Matches         /v4/matches    Validates returned match data strucutre and filters by Id


### What This Project Demonstrates

- API testing using Playwrights buit-in test runner
- Request handling with Axios
- Dynamic data validation and schema assertions
- Use of environment variables (.env) for secure API key management
- Modular and organized test design with reusable utilities


### Tech Stack
- VS Code
- Playwright
- Axios
- Dotenv
- Javascript


### Setup Instructions 

1. Clone the repository
    - git clone https://github.com/johnr1o44/football-api-tests.git
    cd football-api-tests
2. Install dependencies
    - npm install
3. Create a .env file
    - API-KEY= "your football data api key here"
    - BASE_URL= https://api.football-data.org
    // make sure to go to the site and register to create your own api key
4. Run the tests
    - npx playwright test



### Project Structure

tests/
 ┣ areas.test.js
 ┣ competitions.test.js
 ┗ matches.test.js
utils/
 ┗ apiClient.js
.env
package.json

apiClient.js centralizes the Axios configuration and injects the API key into request headers.


### Example Assertions
- Status Codes ensure 200 OK for valid requests
- Schema validation confirm presence of expected field like id, name, area, and status
- Fliterign logic validates competition specific match retrieval
- Data Integrity Verifies known identifiers 


### Outcome 
    The project I created serves as project showing my ability to design, structure, and execute a real world API automation framework from sratch. I hope to demonstrate an understanding of both testing strategy and technical implementation. 
