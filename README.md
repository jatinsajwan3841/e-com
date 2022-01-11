## &nbsp; Hey, there 👋

This is a full stack end to end E-Com. web app including role based authentication and management with integrated Paytm Payment gateway solution.

## Features

-   Responsive
-   Pagination
-   Search with filters: Price, Categories and ratings
-   Role based authentication
-   Reviews on product

-   and many more

Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is \*actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech

In overview, Flip Outlet uses these tools with many open source libraries inside:

-   [MongoDB] - NoSQL database program, uses JSON-like documents with optional schemas.
-   [Express] - Minimal and flexible Node.js web application framework.
-   [ReactJS] - A JavaScript library for building user interfaces.
-   [node.js] - JavaScript runtime environment that runs on the V8 engine.

## Installation

Node and MongoDB must be installed on your system.  
Also for production, you need to have accounts on MongoDB atlas, Heroku, GitHub, Email-provider, Cloudinary, PayTm.

Firstly change directory to _e-com/config_ and create a _config.env_ file.  
Inside this file you have to configure the environment variables required which are mentioned.

```
PORT = 7000
MONGODB_URI = MONGODB_URI
JWT_SECRET = YOUR_SECRET
JWT_EXPIRES_IN = EXPIRE_TOKEN_IN_DAYS,EX- 30 days
COOKIE_EXPIRES_IN = NUMERIC_VALUE

SMTP_SERVICE = MAIL_SERVICE_PROVIDER,EX- gmail
SMTP_MAIL = MAIL_ADDRESS_FOR_SENDING_RESET_TOKENS
SMTP_PASSWORD = MAIL_PASSWORD

CLOUDINARY_NAME = CLOUDINARY_NAME
CLOUDINARY_API_KEY = CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET = CLOUDINARY_API_SECRET

FRONTEND_URL = FRONTEND_URL
CORES_ORIGIN = ALLOWED_ORIGIN_TO_ACCESS,for dev,use localhost

PAYTM_MID = PAYTM_MERCHANT_ID
PAYTM_M_KEY = PAYTM_MERCHANT_KEY
```

After that change directory to _e-com/frontend_ and create _.env.development_ file.  
Inside this file you have to configure the environment variables required which are mentioned.

```
REACT_APP_API_BASE_URL = API_SERVER_ADDRESS_WITH_PORT
```

now, install the dependencies in _ecom_ directory and start the server.  
This will start the backend api server.

```sh
cd e-com
npm i
npm run dev
```

Now change directory to _e-com/frontend_, install the dependencies and start the server.
This will start the frontend react server

```sh
cd frontend
npm i
npm start
```

For production, I have used Heroku for backend API server and github pages for frontend deployments.  
If you are also using Heroku, then you need to create these environment variables inside _settings/Config Vars_ and link your github repo if repo available on github.
