#!/usr/bin/env node
/* eslint-disable no-tabs */

import React from 'react'
import { render } from 'ink'
import meow from 'meow'
import App from './ui'

const cli = meow(
  `
	Usage
	  $ starters

	Options
		--name  Your name

	Examples
	  $ starters --name=Jane
	  Hello, Jane
`,
  {
    flags: {
      name: {
        type: 'string'
      }
    }
  }
)

render(<App name={cli.flags.name} />)