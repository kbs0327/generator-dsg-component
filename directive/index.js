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
      message: 'Where would you like to create this directive?',
      default: self.config.get('directiveDirectory')
    },
    {
      name: 'scriptAppName',
      message: 'What\'s your module name?',
      default: function (props) {
        return moduleUtil.findFolderModuleName(props.dir);
      }
    },
    {
      type:'confirm',
      name: 'complex',
      message: 'Does this directive need an external html file?',
      default: true
    }
  ];

  this.prompt(prompts, function (props) {
    var basePath = this.config.get('basePath');
    this.dir = props.dir.indexOf(basePath) === 0 ?
      path.join(props.dir, this.name) :
      path.join(basePath, props.dir, this.name);
    this.scriptAppName = props.scriptAppName;
    this.complex = props.complex;
    done();
  }.bind(this));
};

Generator.prototype.createFiles = function createFiles() {
  var configName = 'directiveSimple';
  var templateDir = path.join(this.sourceRoot(), 'directiveSimple');
  if (this.complex) {
    configName = 'directiveComplex';
    templateDir = path.join(this.sourceRoot(), 'directiveComplex');
  }

  this.moduleUtil = moduleUtil;
  ngUtil.copyTemplates(this, 'directive', templateDir, configName);
};
