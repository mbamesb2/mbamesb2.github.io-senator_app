'use strict';

describe('senatorApp.version module', function() {
  beforeEach(module('senatorApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
