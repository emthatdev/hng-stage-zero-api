# HNG Stage 0 Backend Task - Public API in JavaScript

This is a simple public API built using Node.js and Express for the [HNG12](https://hng.tech/hire/nodejs-developers) Stage 0 Backend task. It has a single endpoint that returns the following basic information in JSON:
- 📧 My registered email address for the HNG12 workspace
- 🕒 The current datetime in ISO 8601 format.
- 🌍 The GitHub repo url

## How To Setup

### 1. Requirements
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14+ recommended)
- [Git](https://git-scm.com/)

### 2. Clone the Repository
```sh
git clone https://github.com/emthatdev/hng-stage-zero-api.git
cd hng-stage-zero-api
```

### 3. Install Dependencies
```sh
npm install
```

### 4. Set Up Environment Variables (Optional)
Feel free to create a `.env` file in the root directory and add:
```env
PORT=3000
```
The server will run on 3000 without this step anyway.
> **Note:** Do **not** commit `.env` to Git for security reasons. (I know this is a basic project and all but...best practices y'know?)

### 5. Start the Server
```sh
npm start
```
or
```sh
node .
```
The server should now be running at `http://localhost:3000` or on whatever port you set.

## API Endpoints

### 1. Get Current Date & Time
```http
GET /
```
**Response:**
```json
{
  "email": "my-email",
  "current_datetime": "whatever-the-current-datetime-is",
  "github_url": "https://github.com/emthatdev/hng-stage-zero-api"
}
```
