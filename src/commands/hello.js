const {Command, flags} = require('@oclif/command')
const pkg = require('../../package')
const checkForUpdate = require('update-check')

class HelloCommand extends Command {
  async run() {
    const {flags} = this.parse(HelloCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/commands/hello.js`)
    try {
      update = await checkForUpdate(pkg);
    } catch (err) {
      console.error(`Failed to check for updates: ${err}`);
    }
  }
}

HelloCommand.description = `Describe the command here
...
Extra documentation goes here
`

HelloCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = HelloCommand