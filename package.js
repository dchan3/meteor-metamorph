Package.describe({
  name: 'dchan3:metamorph',
  version: '0.0.1',
  summary: 'Change content of <meta> tags in templates',
  git: 'https://github.com/dchan3/meteor-metamorph',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');
  api.use(['jquery', 'ecmascript']);
  api.mainModule('metamorph.js');
  api.export('metamorph');
});
