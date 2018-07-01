import { $ } from 'meteor/jquery';

// Write your package code here!
export default metamorph = {
  pageTitle: function(newTitle) {
    if ($('title')) $('title').text(newTitle);
    else $('head').append("<title>" + newTitle + "</title>");
  },
  getTags: function() {
    if (typeof arguments[0] === 'string') {
      var tag = $('meta[name="' + arguments[0] + '"]');
      if (tag[0] === undefined) {
        tag = $('meta[property="' + arguments[0] + '"]');
      }
      return $(tag).attr("content") || undefined;
    }
    else if (typeof arguments[0] === 'object') {
      var retval = {};
      for (var i in arguments[0]) {
        retval[arguments[0][i]] = this.getTags(arguments[0][i]);
      }
      return retval;
    }
    return undefined;
  },
  setTags: function() {
    if (arguments.length === 2) {
      if (typeof arguments[0] === 'string') {
        if (typeof arguments[1] === 'string') {
          var tag = $('meta[name="' + arguments[0] + '"]');
          if (tag[0]) {
            $(tag).attr("content", arguments[1]);
          }
          else {
            $('head').append("<meta name='" + arguments[0] + "' content='" + arguments[1] + "' />");
          }
        }
        else if (typeof arguments[1] === 'object') {
          if (typeof (arguments[1])[0] === 'string' &&
              ["name","property"].includes((arguments[1])[1])) {
            var tag = $('meta[' + arguments[1][1] + '="' + arguments[0] + '"]');
            if (tag[0]) {
              $(tag).attr("content", arguments[1][0]);
            }
            else {
              $('head').append("<meta " + arguments[1][1] + "='" + arguments[0] + "' content='" + arguments[1][0] + "' />");
            }
          }
        }
      }
    }
    else if (arguments.length === 1) {
      for (var tagName in arguments[0]) {
        this.setTags(tagName, arguments[0][tagName]);
      }
    };
  }
};

// Variables exported by this module can be imported by other packages and
// applications. See metamorph-tests.js for an example of importing.
export const name = 'metamorph';
