const home = process.env.HOME || require('os').homedir()
const path = require('path')
const fs = require('fs')
const dbPath = path.join(home, '.todo')

module.exports = {
  read(path = dbPath) {
    return new Promise((resolved, rejected) => {
      fs.readFile(path, { flag: 'a+' }, (error, data) => {
        if (error) {
          console.log(error, 'error1')
          return rejected(error)
        }
        let list
        try {
          list = JSON.parse(data.toString())
        } catch (e) {
          list = []
        }
        resolved(list)
      })
    })
  },
  write(list, path = dbPath) {
    return new Promise((resolved, rejected) => {
      const string = JSON.stringify(list)
      fs.writeFile(path, string + '\n', (error) => {
        if (error) {
          return rejected(error)
        }
      })
      resolved()
    })
  }
}