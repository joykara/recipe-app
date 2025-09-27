import express from 'express';
import bodyParser from 'body-parser'
import path from 'path'
import cons from 'consolidate'
import dust from 'dustjs-helpers'
import pg from 'pg'

const app = express()

//DB Connection String
const connect = "postgres://jkara:jkara@host:5432/recipes"

// Assign Dust engine to .dust files
