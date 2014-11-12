/*global angular */

'use strict';

describe('Unit: ExampleService', function() {

  var service;

  beforeEach(function() {
    // instantiate the theshelf.foo module
    angular.mock.module('theshelf.foo');

    // mock the service
    angular.mock.inject(function(ExampleService) {
      service = ExampleService;
    });
  });

  it('should exist', function() {
    expect(service).toBeDefined();
  });

});