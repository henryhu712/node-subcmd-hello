#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()

program
  .version('0.0.1')
  .command('hello', 'Hello World!')
  .parse(process.argv)
