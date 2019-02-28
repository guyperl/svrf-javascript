/*
 * SVRF API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@svrf.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SVRF);
  }
}(this, function(expect, SVRF) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SVRF.PaginationResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PaginationResponse', function() {
    it('should create an instance of PaginationResponse', function() {
      // uncomment below and update the code to test PaginationResponse
      //var instane = new SVRF.PaginationResponse();
      //expect(instance).to.be.a(SVRF.PaginationResponse);
    });

    it('should have the property nextPageNum (base name: "nextPageNum")', function() {
      // uncomment below and update the code to test the property nextPageNum
      //var instane = new SVRF.PaginationResponse();
      //expect(instance).to.be();
    });

    it('should have the property pageNum (base name: "pageNum")', function() {
      // uncomment below and update the code to test the property pageNum
      //var instane = new SVRF.PaginationResponse();
      //expect(instance).to.be();
    });

  });

}));
