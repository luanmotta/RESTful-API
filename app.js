var express              = require('express');
var bodyParser           = require('body-parser');

var launcher             = require('./backend/bin/launcher.js');
var routeManager         = require('./backend/bin/route-manager.js');

var app = launcher(express, bodyParser);

routeManager(app, express);