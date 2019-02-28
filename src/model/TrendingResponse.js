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
    define(['ApiClient', 'model/Media', 'model/PaginationResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Media'), require('./PaginationResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SVRF) {
      root.SVRF = {};
    }
    root.SVRF.TrendingResponse = factory(root.SVRF.ApiClient, root.SVRF.Media, root.SVRF.PaginationResponse);
  }
}(this, function(ApiClient, Media, PaginationResponse) {
  'use strict';




  /**
   * The TrendingResponse model module.
   * @module model/TrendingResponse
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>TrendingResponse</code>.
   * @alias module:model/TrendingResponse
   * @class
   * @implements module:model/PaginationResponse
   */
  var exports = function() {
    var _this = this;

    PaginationResponse.call(_this);

  };

  /**
   * Constructs a <code>TrendingResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrendingResponse} obj Optional instance to populate.
   * @return {module:model/TrendingResponse} The populated <code>TrendingResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      PaginationResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('media')) {
        obj['media'] = ApiClient.convertToType(data['media'], [Media]);
      }
    }
    return obj;
  }

  /**
   * Trending media
   * @member {Array.<module:model/Media>} media
   */
  exports.prototype['media'] = undefined;

  // Implement PaginationResponse interface:
  /**
   * The next page to query to see more results, whether or not the next page actually exists.
   * @member {Number} nextPageNum
   */
exports.prototype['nextPageNum'] = undefined;

  /**
   * The current page number
   * @member {Number} pageNum
   */
exports.prototype['pageNum'] = undefined;



  return exports;
}));


