const puppeteer = require('puppeteer')
const { isJsonString, logger } = require('../utils')
const { KenoEntity } = require('../entities')
const { ROOT_URL } = process.env

class PuppetService {
  static async start() {
    try {
      this.browser = await puppeteer.launch({
        'args' : [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
      })
      this.page = await this.browser.newPage()
      await this.page.goto(ROOT_URL)
      console.log('started puppet')
      this.page.on('response', async res => {
        try {
          const kenoObj = await PuppetService._processResponse(res)
          if (!kenoObj) {
            logger.log('not a valid keno obj')
            return
          }
          logger.log(JSON.stringify(kenoObj, null, 2))
          await KenoEntity.write(kenoObj)
        } catch (e) {
          throw new Error(e)
        }
      })
      return 'started'
    } catch (e) {
      throw new Error(e)
    }
  }

  static async stop() {
    try {
      if (!this.browser || !this.browser.close) {
        return 'browser not running'
      }
      await this.browser.close()
      return 'stopped'
    } catch (e) {
      throw new Error(e)
    }
  }

  static async _processResponse(res) {
    try {
      const buff = await res.buffer()
      const str = buff.toString('utf8')
      if (isJsonString(str)) {
        const parsed = JSON.parse(str)
        const { CurrentResults = false, DrawNumber = false } = parsed
        if (CurrentResults && DrawNumber && DrawNumber !== '99999999') {
          return JSON.parse(str)
        }
      }
      return false
    } catch (e) {
      throw new Error(e)
    }
  }
}

module.exports = PuppetService
