#!/usr/bin/env node

! function () {

  'use strict';

  var pronto = require('prontojs'),
    when = pronto.when;

  if ( ! process.env.PORT ) {
    process.env.PORT = 30570;
  }

  pronto()

    .open('index.html')

    .open('luigi.js', when('/luigi.js'))

    .open('template.html', when('/template.html'));

} ();
