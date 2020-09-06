#!/usr/bin/env node

const program = require('commander')
const api = require('./index')
const pkg = require('./package.json')

program
  .version(pkg.version)

program
  .command('add')
  .description('add a task')
  .action((source) => {
    api.add(...source.args)
  })
program
  .command('clear')
  .description('clear all tasks')
  .action(() => {
    api.clear()
  })

if (process.argv.length < 3) {
  // 表示 node 只运行了 node cli
  api.showAll()
} else {
  program.parse(process.argv)
}


