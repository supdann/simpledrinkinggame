'use strict';

////////////////////////////////////////////////////////////
////						 API						////
////////////////////////////////////////////////////////////

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const api = express()

api.use(cors())

api.use(bodyParser.json())

api.use(bodyParser.urlencoded({ extended: true }))

var hitsCount = 0

api.get('/hit', async (req, res) => {
	console.log("All good: "+hitsCount)
	hitsCount = hitsCount + 1
	try {
		res.status(201).json({ result: true, hitsCount: hitsCount })
	} catch (e) { res.status(500).json({ result: false, hitsCount: hitsCount, error: e }) }
})

api.get('/hitsCount', async (req, res) => {
	try {
		res.status(201).json({ result: true, hitsCount: hitsCount })
	} catch (e) { res.status(500).json({ result: false, hitsCount: hitsCount, error: e }) }
})

api.get('/reset', async (req, res) => {
	hitsCount = 0
	try {
		res.status(201).json({ result: true, hitsCount: hitsCount })
	} catch (e) { res.status(500).json({ result: false, hitsCount: hitsCount, error: e }) }
})

api.listen(5000, () => {
	console.log("Server running on port 5000")
})