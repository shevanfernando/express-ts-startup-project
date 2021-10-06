# NodeJS (Express) with TypeScript Startup Project

## Getting started <hr>

### 1. Install dependencies

Install npm dependencies:

```
cd express-ts-startup-project
npm install
```

<details><summary><strong>Alternative:</strong> Clone the entire repo</summary>

Clone this repository:

```
git clone https://github.com/shevanfernando/express-ts-startup-project.git
```

Install npm dependencies:

```
cd express-ts-startup-project
npm install
```

</details>

### 2. Change environment variables

All the environment variables are located in [`.env`](.env). The default name of this
file [`.env.example`](.env.example). Duplicate it (`.env.example`) and rename it as a `.env`.

#### 1. Change APP_PORT

Default port is 5000, can change it your aspect.

```
APP_PORT=5000
```

### 3. Start the REST API server

```
npm run dev
```

The server is now running on `http://localhost:5000`. You can now the API requests,
e.g. [`http://localhost:5000/api/ping`](http://localhost:5000/api/ping).

### 5. Running unit tests and super tests

```
cd express-ts-startup-project
npm run test
```

<details><summary><strong>Alternative:</strong> Other testing</summary>

Watch all test:

```
cd express-ts-startup-project
npm run test:watch
```

Check test coverage:

```
cd express-ts-startup-project
npm itest:coverage
```

</details>
