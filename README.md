App Name: MLC
Live app: https://secret-tundra-70896.herokuapp.com/account.html

Purpose:
    Public facing website for the band Midlife Crisis (MLC).
    Display images, upcoming gigs.
    Enable users to register to recieve notifications about upcoming gigs, music releases and merchandise.
    Enable users to log in and manage their account.

Screenshot of app

![A screenshot of MLC app](mygreatapp-screenshot.png)


API documentation:
    Get condition database to load into state

        endpoint: /treatmentdata
        method: GET
        required fields: none

    Get condition database to load into state

        endpoint: /conditiondata
        method: GET
        required fields: none

    Check auth status

        endpoint: /authcheck
        method: GET
        headers: {authorization: `Bearer ${authToken}`}



    Create user record and opt in to receiving emails
        endpoint: /user
        method: POST
        required fields: 
            username: string
            password: string
            condition: string
        headers: {
            "Content-Type": "application/json",
        },

    Login:
        endpoint: /auth/login
        method: POST
        required fields
            username
            password
        headers: {
            "Content-Type": "application/json",
        },


    Retrieve user record :
        what it does: retrieves user data [username, condition
        treatments, log for a specific user record.
        requirement: must be authenticated
        endpoint: /protected/user
        method: GET
        headers: {
            authorization: 'Bearer [insert auth token]',
            id: [inser id],

    Update user record:
        what it does: updates user record with new fields
        requirement: must be authenticated
        endpoint: /protected/user
        method: POST
        required fields: 
            username: string
        updateable field: condition
        headers: {
            "Content-Type": "application/json",
            authorization: 'Bearer [insert auth key]' ,
        },

    Update condition log
        what it does: updates user's log of treatments for complete / incomplete.
        endpoint: /user/updatelog
        method: POST
        required fields
            username, log
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)




Technology used:
    front end: 
        html, 
        javascript,
        jquery, 
        css
    back end: 
        node.js
        mongoose

        dependencies:
            "bcryptjs": "^2.4.0",
            "body-parser": "^1.15.2",
            "dotenv": "^4.0.0",
            "express": "^4.16.4",
            "jsonwebtoken": "^7.4.1",
            "mongoose": "^5.0.6",
            "morgan": "^1.9.1",
            "passport": "^0.3.2",
            "passport-jwt": "^2.2.1",
            "passport-local": "^1.0.0"

    testing
        "chai": "^4.2.0",
        "chai-http": "^4.2.1",
        "mocha": "^5.2.0"


