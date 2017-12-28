const test = require('ava')
const fs = require('fs')
const path = require('path')

let dist = path.join(__dirname, '../../dist')

test.before('`dist` path should be created', t => {
	t.true(fs.lstatSync(dist).isDirectory())
})

test('`mifa.css` should be created', t => {
	fs.readdirSync(dist).map(file => {
		if (file === 'mifa.css') t.is(file, 'mifa.css')
	})
})
