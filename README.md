# Vinyl Album App, Fullstack Demo

node express backend for vinyl album app

## Create Postgres database

### Start pql with postgres user to create vinyl db and vinyl user

```sql
> psql -d postgres -U postgres
CREATE ROLE vinyl WITH LOGIN PASSWORD 'vinyl';
ALTER ROLE vinyl CREATEDB;
CREATE DATABASE vinyl WITH OWNER vinyl;
GRANT CONNECT ON DATABASE vinyl TO vinyl;
GRANT USAGE ON SCHEMA public TO vinyl;

\q
```

### login to vinyl db with vinyl user and create albums table

```sql
> psql -d vinyl -U vinyl
CREATE TABLE albums(
id SERIAL PRIMARY KEY,
artist VARCHAR(30),
title VARCHAR(30),
year SMALLINT,
condition VARCHAR(30),
thumb VARCHAR(30),
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
 );

 \q
```

## Install, Build, and Start

```bash
git clone git@github.com:hillscottc/fullstack-vinyl.git
cd fullstack-vinyl
npm i
npm start
```

(If you get errors running npm i at the top level, try running `npm i` in `fullstack-vinyl/client` and then run `npm i` in `fullstack-vinyl/server`. This was a little bumpy on my old linux box.) 

App will be running at <http://localhost:3000/>
