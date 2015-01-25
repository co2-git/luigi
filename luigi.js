/**
 *  @author https://github.com/co2-git
 *  @licence MIT
 */

! function (di) {

  'use strict';

  /** luigi - minimalistic template rendere
   *
   *  @function
   *  @return null
   *  @arg {String} id
   *  @arg {Function} cb
   */

  function luigi (id, cb) {

    var luigi = this;

    setTimeout(function () {

      // Make sure we have jQuery

      if ( typeof $ !== 'function' ) {
        return cb(new Error('Sorry! I need jQuery to function!'));
      }

      // Get script template by id

      var template = $('#' + id);

      // Complain if no script template found by that id 

      if ( ! template.length ) {
        return cb(new Error('No such template: ' + id));
      }

      // Get src attribute

      var src = template.attr('src');

      // If has src, hence URL

      if ( src ) {

        // Fetch url

        return $.ajax(src)

          // Rejoyce on success

          .success(function (data) {
            cb(null, $(data));
          })

          // Complain on error

          .error(function (error) {
            cb(error);
          });
      }

      // No src attribute, so it is static template

      cb(null, $(template.text().trim()));

    });
  }

  // export

  di.luigi = luigi;

} ((typeof module !== 'undefined' && module.exports) || window);
