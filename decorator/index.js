'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var util = require('util');
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');
var moduleUtil = require('../app/moduleUtil.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.askFor = function askFor() {
  var self = this;
  var done = this.async();
  var prompts = [
    {
      name: 'dir',
      message: 'Where would you like to create this decorator?',
      default: self.config.get('serviceDirectory')
    },
    {
      name: 'scriptAppName',
      message: 'What\'s your module name?',
      default: function (props) {
        return moduleUtil.findFolderModuleName(props.dir);
      }
    }
  ];

  this.prompt(prompts, function (props) {
    var basePath = this.config.get('basePath');
    this.dir = props.dir.indexOf(basePath) === 0 ?
      path.join(props.dir, this.name) :
      path.join(basePath, props.dir, this.name);
    this.scriptAppName = props.scriptAppName;
    done();
  }.bind(this));
};

Generator.prototype.createFiles = function createFiles() {
  this.moduleUtil = moduleUtil;
  ngUtil.copyTemplates(this, 'decorator');
};
