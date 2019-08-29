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
  'contactsModule': 'doorayWebApp.contact',
  'driveModule': 'doorayWebApp.drive',
  'editorModule': 'doorayWebApp.editor',
  'homeModule': 'doorayWebApp.home',
  'lazyloadModule': 'doorayWebApp.lazyload',
  'presentationModule': 'doorayWebApp.presentation',
  'logModule': 'doorayWebApp.log',
  'renderModule': 'doorayWebApp.render',
  'settingModule': 'doorayWebApp.settings',
  'shareModule': 'doorayWebApp.share',
  'signupModule': 'doorayWebApp.signup',
  'streamModule': 'doorayWebApp.stream',
  'mailModule': 'doorayWebApp.mail',
  'popupModule': 'doorayWebApp.popup',
  'wikiModule': 'doorayWebApp.wiki',
  'settingAdminModule': 'doorayWebApp.setting.admin',
  'settingCommonModule': 'doorayWebApp.setting.common',
  'settingUserModule': 'doorayWebApp.setting.user'
};

function findModulePath(moduleName) {
  return modulePathMap[moduleName];
}

function findModuleRealName(moduleName) {
  return moduleRealNameMap[moduleName] || moduleName;
}

function makeDeclareTemplate(moduleName) {
  const modulePath = findModulePath(moduleName);
  if (modulePath) {
    return 'import %MODULE_NAME% from \'%MODULE_PATH%\';\n\n%MODULE_NAME%'
      .replace(/%MODULE_NAME%/g, moduleName)
      .replace(/%MODULE_NAME%/g, modulePath);
  }
  return 'angular\n\t.module(\'%MODULE_NAME%\')';
}

module.exports = {
  findModulePath: findModulePath,
  findModuleRealName: findModuleRealName,
  makeDeclareTemplate: makeDeclareTemplate
};
