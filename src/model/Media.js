/**
 * SVRF API
 * # Getting Started  SVRF's API allows you to supercharge your project or app with the first and largest search engine for immersive experiences. We make it simple for any developer to incorporate highly immersive experiences with all kinds of applications: virtual reality, augmented reality, mixed reality, mobile, and web.  The SVRF API is based on REST principles, allowing it to integrate cross-platform. Our endpoints return responses in [JSON][]. We support [CORS][], allowing you to access immersive experiences indexed by SVRF on your own web domains. We provide a variety of resolutions, projections, and file formats to support most modern clients.  The SVRF API Documentation is available at [https://developers.svrf.com][SVRF Dev].  ## Access and API Keys  The SVRF API is currently in private beta and access is limited to select partners. If you are interested in using the SVRF API for your app or project, please contact us at [api@svrf.com][API Email]. We cannot guarantee immediate access for all requests, but we will announce a public release in the coming months.  See our [terms of service][TOS] for restrictions on using the SVRF API.  If you have any questions please contact us at [api@svrf.com][API Email]. Submit API corrections via [GitHub Issues][].  ## API Highlights  ### Search Endpoint  The [SVRF Search Endpoint][Docs Search] brings the power of immersive search found on [SVRF.com][SVRF] to your app or project. Our search engine enables your users to instantly find the immersive experience they are seeking. Content is sorted by the SVRF rating system, ensuring that the highest quality and most relevant search results are returned first.  ### Trending Endpoint  The [SVRF Trending Endpoint][Docs Trending] provides your app or project with the hottest immersive content - curated by real humans. The experiences returned mirror the [SVRF homepage][SVRF], from timely cultural content to trending pop-culture references. The experiences are updated regularly to ensure users always get a fresh list of immersive content.  ## API Libraries  You can use SVRF API libraries to encapsulate endpoint requests: * [C#][CSharp] * [Java][Java] * [JavaScript][JavaScript] * [Objective C][Objective C]  ## Attribution  ### Authors and Site Credit  At SVRF, we believe in giving credit where credit is due. Do your best to provide attribution to the `authors` and `site` where the content originated. We suggest using the format: __by {authors} via {site}__.  If possible, provide a way for users to discover and visit the page the content originally came from (`url`).  ### Powered By SVRF  As per section 5a of the [terms of service][TOS], __we require all apps that use the SVRF API to conspicuously display \"Powered By SVRF\" attribution marks where the API is utilized.__  ## Rate Limits  The SVRF API has a generous rate limit to ensure the best experience for your users. We rate limit by IP address with a maximum of 100 requests per second. If you exceed this rate limit, requests will be blocked for 60 seconds. Requests blocked by the rate limit will return with status code `429`.  [API Email]: mailto:api@svrf.com [CORS]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing [CSharp]: https://www.nuget.org/packages/SVRF.Client [Docs Search]: https://developers.svrf.com/#tag/Media/paths/~1vr~1search?q={q}/get [Docs Trending]: https://developers.svrf.com/#tag/Media/paths/~1vr~1trending/get [GitHub Issues]: https://github.com/Svrf/svrf-api/issues [Java]: https://mvnrepository.com/artifact/com.svrf/svrf-client [JavaScript]: https://www.npmjs.com/package/svrf-client [JSON]: http://www.json.org/ [Objective C]: https://cocoapods.org/pods/SVRFClient [SVRF]: https://www.svrf.com [SVRF Dev]: https://developers.svrf.com [TOS]: https://www.svrf.com/terms 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@svrf.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MediaFiles', 'model/MediaType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediaFiles'), require('./MediaType'));
  } else {
    // Browser globals (root is window)
    if (!root.SVRF) {
      root.SVRF = {};
    }
    root.SVRF.Media = factory(root.SVRF.ApiClient, root.SVRF.MediaFiles, root.SVRF.MediaType);
  }
}(this, function(ApiClient, MediaFiles, MediaType) {
  'use strict';




  /**
   * The Media model module.
   * @module model/Media
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Media</code>.
   * @alias module:model/Media
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>Media</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Media} obj Optional instance to populate.
   * @return {module:model/Media} The populated <code>Media</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('adult')) {
        obj['adult'] = ApiClient.convertToType(data['adult'], 'Boolean');
      }
      if (data.hasOwnProperty('authors')) {
        obj['authors'] = ApiClient.convertToType(data['authors'], ['String']);
      }
      if (data.hasOwnProperty('canonical')) {
        obj['canonical'] = ApiClient.convertToType(data['canonical'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('embedHtml')) {
        obj['embedHtml'] = ApiClient.convertToType(data['embedHtml'], 'String');
      }
      if (data.hasOwnProperty('embedUrl')) {
        obj['embedUrl'] = ApiClient.convertToType(data['embedUrl'], 'String');
      }
      if (data.hasOwnProperty('files')) {
        obj['files'] = MediaFiles.constructFromObject(data['files']);
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('site')) {
        obj['site'] = ApiClient.convertToType(data['site'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = MediaType.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Whether the Media is adult content
   * @member {Boolean} adult
   * @default false
   */
  exports.prototype['adult'] = false;
  /**
   * The Media's authors. This should be displayed when possible.
   * @member {Array.<String>} authors
   */
  exports.prototype['authors'] = undefined;
  /**
   * The canonical page this Media can be found at via SVRF.
   * @member {String} canonical
   */
  exports.prototype['canonical'] = undefined;
  /**
   * A description of the Media
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The duration of the Media in seconds.
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * An `<iframe>` tag that embeds a player that plays the Media.
   * @member {String} embedHtml
   */
  exports.prototype['embedHtml'] = undefined;
  /**
   * A player that can be embedded using an `<iframe>` tag to play the Media.
   * @member {String} embedUrl
   */
  exports.prototype['embedUrl'] = undefined;
  /**
   * @member {module:model/MediaFiles} files
   */
  exports.prototype['files'] = undefined;
  /**
   * The height, in pixels, of the Media's source
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * The unique ID of this Media
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The site that this Media came from. This should be displayed when possible.
   * @member {String} site
   */
  exports.prototype['site'] = undefined;
  /**
   * The title of the Media, suitable for displaying
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {module:model/MediaType} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The original page this Media is located at.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * The width, in pixels, of the Media's source
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;



  return exports;
}));


