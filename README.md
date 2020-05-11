# Oregon Lottery Keno Scraper
---
Update: May 2020
The scraper is still running very well. If you would like an API key to access the raw data in real time for any reason ping me and we can work something out.

Description: A server to scrape and save the oregon lottery keno picks with a control api. There is a companion repo with my probability algorithms that I apply to the keno pseudo random number generator. Some of the algorithms there were shared with me by a friend and his business partner and were developed by him during the vietnam war for target marketing. Unfortunatly, I promised I would not open source it.

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
- [ ] Add CI / Deploy pipeline
- [ ] Add better headless browser configs for random user agents and screen sizes
- [ ] Add unit tests

notes:
[heroku puppeteer fix](https://stackoverflow.com/questions/52225461/puppeteer-unable-to-run-on-heroku)
