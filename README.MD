<h1 align=center>📝 Note App</h1>
<h4 align=center>An app to save your notes</h4>
<h4 align=center>Made with: <br> 

<a href="https://nextjs.org/">Nextjs</a> client side, <a href="https://nodejs.org/">Nodejs</a> + <a href="https://www.typescriptlang.org/">Typescript</a> + <a href="https://graphql.org/">Graphql</a> server side</h4>

<br/>

<img src="./.github/preview.png">

<br/>

<h3 align=center>Requirements:</h3>
<h5 align=center><a href="https://docs.docker.com/get-docker/">Docker</a> & <a href="https://docs.docker.com/compose/install/">Docker Compose</a></h5>

<br>

<h1>🧰 Backend</h1>

```bash
# Run to make changes on backend
cd server && docker-compose up
```
This will bring up a container with auto reload for backend changes and a postgres container

<h3 align=center>Run the tests</h3>

```bash
# Container up, run this
docker-compose backend yarn test

# Without container up
yarn test
```

<br>

<h1>🎨 Frontend</h1>

```bash
# Runt to make change on frontend
cd client && yarn dev
```
<br>

<h1>🚀 Build</h2>
<h4>Change .env file for your configs</h4>
Use .env.example as an example

```bash
DATABASE_URL="postgresql://db_user:db_pw@postgres:5432/db_name?schema=public"
POSTGRES_USER=db_user
POSTGRES_PASSWORD=db_pw
POSTGRES_DB=db_name
```

<br><br>
<h4>Up your container 🚀</h4>

```bash
# Run to build project
docker-compose up
```
<a href="http://localhost:3000">After, click here</a>
