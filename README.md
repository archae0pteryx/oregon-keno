# Oregon Lottery Keno Scraper
---
A server to scrape and save the oregon lottery keno picks with a control api

## requirements
- node v12
- mongodb

## Setup
```bash
# Fill out env vars
cp .env.example .env

# Install deps
yarn

# Run dev server
yarn dev

# Run prod server
yarn start

```

## API
```bash
GET /heartbeat # thump thump
GET /start # start the headless browser
GET /stop # stop the thing
GET /db # get all entries
POST /db # write an entry manually
```

TODO:
- Add CI / Deploy pipeline
- Add better headless browser configs for random user agents and screen sizes
- Add unit tests
