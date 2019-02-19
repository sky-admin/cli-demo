skyadmincli
========

a cli demo

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/skyadmincli.svg)](https://npmjs.org/package/skyadmincli)
[![Downloads/week](https://img.shields.io/npm/dw/skyadmincli.svg)](https://npmjs.org/package/skyadmincli)
[![License](https://img.shields.io/npm/l/skyadmincli.svg)](https://github.com/sky-admin/cli-demo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g skyadmincli
$ skycli COMMAND
running command...
$ skycli (-v|--version|version)
skyadmincli/0.0.3 darwin-x64 node-v11.9.0
$ skycli --help [COMMAND]
USAGE
  $ skycli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`skycli hello`](#skycli-hello)
* [`skycli help [COMMAND]`](#skycli-help-command)

## `skycli hello`

Describe the command here

```
USAGE
  $ skycli hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/sky-admin/cli-demo/blob/v0.0.3/src/commands/hello.js)_

## `skycli help [COMMAND]`

display help for skycli

```
USAGE
  $ skycli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
