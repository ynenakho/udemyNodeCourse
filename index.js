// const express = require('express');
import express from 'express';
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const keys = require('./config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT);