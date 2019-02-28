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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Media', 'model/SuccessResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Media'), require('./SuccessResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SVRF) {
      root.SVRF = {};
    }
    root.SVRF.SingleMediaResponse = factory(root.SVRF.ApiClient, root.SVRF.Media, root.SVRF.SuccessResponse);
  }
}(this, function(ApiClient, Media, SuccessResponse) {
  'use strict';




  /**
   * The SingleMediaResponse model module.
   * @module model/SingleMediaResponse
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>SingleMediaResponse</code>.
   * @alias module:model/SingleMediaResponse
   * @class
   * @implements module:model/SuccessResponse
   */
  var exports = function() {
    var _this = this;

    SuccessResponse.call(_this);

  };

  /**
   * Constructs a <code>SingleMediaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SingleMediaResponse} obj Optional instance to populate.
   * @return {module:model/SingleMediaResponse} The populated <code>SingleMediaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      SuccessResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('media')) {
        obj['media'] = Media.constructFromObject(data['media']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Media} media
   */
  exports.prototype['media'] = undefined;

  // Implement SuccessResponse interface:
  /**
   * If the request was successful
   * @member {Boolean} success
   */
exports.prototype['success'] = undefined;



  return exports;
}));


