const express = require('express')
const app = express()
const cyclicdb = require('@cyclic.sh/dynamodb')

const db = cyclicdb("testvvvvvv124442")
const data = db.collection("data")