# MediaWiki + Selenium + Node.js

An example repository on how to implement Selenium tests in Node.js.

## Prerequisites

- [Firefox 47.0.1](https://ftp.mozilla.org/pub/firefox/releases/47.0.1/)
- [Node.js](https://nodejs.org/en/)
- [MediaWiki-Vagrant](https://www.mediawiki.org/wiki/MediaWiki-Vagrant)

## Installation

    npm install

## Usage (except WebdriverIO)

    npm test

## Usage (WebdriverIO)

Additional prerequisites:

- [Chrome](https://www.google.com/chrome/)
- [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/)

Run the commands in separate console tabs or windows:

    chromedriver --url-base=/wd/hub --port=4444
    npm run wdio

## Links

- [Selenium/Node.js](https://www.mediawiki.org/wiki/Selenium/Node.js)

[![Build Status](https://travis-ci.org/zeljkofilipin/mediawiki-selenium-nodejs.svg?branch=master)](https://travis-ci.org/zeljkofilipin/mediawiki-selenium-nodejs)
