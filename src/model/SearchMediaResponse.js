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
    root.SVRF.SearchMediaResponse = factory(root.SVRF.ApiClient, root.SVRF.Media, root.SVRF.PaginationResponse);
  }
}(this, function(ApiClient, Media, PaginationResponse) {
  'use strict';




  /**
   * The SearchMediaResponse model module.
   * @module model/SearchMediaResponse
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>SearchMediaResponse</code>.
   * @alias module:model/SearchMediaResponse
   * @class
   * @implements module:model/PaginationResponse
   */
  var exports = function() {
    var _this = this;

    PaginationResponse.call(_this);



  };

  /**
   * Constructs a <code>SearchMediaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchMediaResponse} obj Optional instance to populate.
   * @return {module:model/SearchMediaResponse} The populated <code>SearchMediaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      PaginationResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('media')) {
        obj['media'] = ApiClient.convertToType(data['media'], [Media]);
      }
      if (data.hasOwnProperty('tookMs')) {
        obj['tookMs'] = ApiClient.convertToType(data['tookMs'], 'Number');
      }
      if (data.hasOwnProperty('totalNum')) {
        obj['totalNum'] = ApiClient.convertToType(data['totalNum'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The search results
   * @member {Array.<module:model/Media>} media
   */
  exports.prototype['media'] = undefined;
  /**
   * The number of milliseconds the request took
   * @member {Number} tookMs
   */
  exports.prototype['tookMs'] = undefined;
  /**
   * The number of total results for query
   * @member {Number} totalNum
   */
  exports.prototype['totalNum'] = undefined;

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


