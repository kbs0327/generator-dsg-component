'use strict';

const modulePathMap = {
  'appModule': '@app/modules/app.modules.es6',
  'calendarModule': '@app/modules/calendar/calendar.modules.es6',
  'commonModule': '@app/modules/common/common.modules.es6',
  'translationModule': '@app/modules/common/translate.modules.es6',
  'contactsModule': '@app/modules/contact/contact.modules.es6',
  'driveModule': '@app/modules/drive/drive.modules.es6',
  'editorModule': '@app/modules/editor/editor.modules.es6',
  'homeModule': '@app/modules/home/app.home.modules.es6',
  'layoutModule': '@app/modules/layouts/layout.modules.es6',
  'lazyloadModule': '@app/modules/lazyload/lazyload.modules.es6',
  'componentsModule': '@app/modules/components/components.modules.es6',
  'logModule': '@app/modules/log/log.modules.es6',
  'mailModule': '@app/modules/mail/mail.modules.es6',
  'presentationModule': '@app/modules/presentation/presentation.modules.es6',
  'renderModule': '@app/modules/render/render.modules.es6',
  'projectModule': '@app/modules/project/project.modules.es6',
  'settingModule': '@app/modules/setting/settings.modules.es6',
  'shareModule': '@app/modules/share/share.modules.es6',
  'popupModule': '@app/modules/popup/popup.modules.es6',
  'signupModule': '@app/modules/signup/signup.modules.es6',
  'streamModule': '@app/modules/stream/stream.modules.es6',
  'wikiModule': '@app/modules/wiki/wiki.modules.es6',
  'sharedLinkModule': '@app/modules/sharedLink/sharedLink.modules.es6',
  'settingAdminModule': '@app/modules/setting/admin/setting.admin.modules.es6',
  'settingCommonModule': '@app/modules/setting/common/setting.common.modules.es6',
  'settingUserModule': '@app/modules/setting/user/setting.user.modules.es6'
};

const moduleRealNameMap = {
  'appModule': 'doorayWebApp',
  'calendarModule': 'doorayWebApp.calendar',
  'commonModule': 'doorayWebApp.common',
  'translationModule': 'doorayWebApp.translation',
  'contactsModule': 'doorayWebApp.contact',
  'driveModule': 'doorayWebApp.drive',
  'componentsModule': 'doorayWebApp.components',
  'editorModule': 'doorayWebApp.editor',
  'homeModule': 'doorayWebApp.home\', [\'validation',
  'layoutModule': 'doorayWebApp.layout',
  'lazyloadModule': 'doorayWebApp.lazyload',
  'logModule': 'doorayWebApp.log',
  'mailModule': 'doorayWebApp.mail',
  'popupModule': 'doorayWebApp.popup',
  'presentationModule': 'doorayWebApp.presentation',
  'renderModule': 'doorayWebApp.render',
  'projectModule': 'doorayWebApp.project',
  'settingModule': 'doorayWebApp.settings',
  'shareModule': 'doorayWebApp.share',
  'sharedLinkModule': 'doorayWebApp.sharedLink',
  'signupModule': 'doorayWebApp.signup\', [\'validation',
  'streamModule': 'doorayWebApp.stream',
  'wikiModule': 'doorayWebApp.wiki',
  'settingAdminModule': 'doorayWebApp.setting.admin',
  'settingCommonModule': 'doorayWebApp.setting.common',
  'settingUserModule': 'doorayWebApp.setting.user'
};

const folderModuleNameMap = {
  'calendar': 'calendarModule',
  'common': 'commonModule',
  'contacts': 'contactsModule',
  'drive': 'driveModule',
  'editor': 'editorModule',
  'home': 'homeModule',
  'layouts': 'layoutModule',
  'lazyload': 'lazyloadModule',
  'components': 'componentsModule',
  'log': 'logModule',
  'mail': 'mailModule',
  'presentation': 'presentationModule',
  'render': 'renderModule',
  'project': 'projectModule',
  'setting': 'settingModule',
  'share': 'shareModule',
  'popup': 'popupModule',
  'signup': 'signupModule',
  'stream': 'streamModule',
  'wiki': 'wikiModule',
  'sharedLink': 'sharedLinkModule',
  'setting/admin': 'settingAdminModule',
  'setting/common': 'settingCommonModule',
  'setting/user': 'settingUserModule'
};

function findModulePath(moduleName) {
  return modulePathMap[moduleName];
}

function findModuleRealName(moduleName) {
  return moduleRealNameMap[moduleName] || moduleName;
}

function findFolderModuleName(path) {
  var folder = path.replace(/(?:app\/modules\/)?(\w+).*$/, '$1');
  if (folder === 'setting') {
    folder = path.replace(/(?:app\/modules\/)?(\w+\/\w+).*$/, '$1');
    return folderModuleNameMap[folder] || folderModuleNameMap.setting;
  }
  return folderModuleNameMap[folder];
}

function makeDeclareTemplate(moduleName) {
  const modulePath = findModulePath(moduleName);
  if (modulePath) {
    return 'import {%MODULE_NAME%} from \'%MODULE_PATH%\';\n\n%MODULE_NAME%'
      .replace(/%MODULE_NAME%/g, moduleName)
      .replace(/%MODULE_PATH%/g, modulePath);
  }
  return 'angular\n\t.module(\'%MODULE_NAME%\')';
}

module.exports = {
  findModulePath: findModulePath,
  findModuleRealName: findModuleRealName,
  findFolderModuleName: findFolderModuleName,
  makeDeclareTemplate: makeDeclareTemplate
};
