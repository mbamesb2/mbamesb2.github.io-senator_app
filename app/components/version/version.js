'use strict';

angular.module('senatorApp.version', [
  'senatorApp.version.interpolate-filter',
  'senatorApp.version.version-directive'
])

.value('version', '0.1');
