/*

  Script:   first word
  Version:  1.2, jQuery plugin version
  Authors:  Jan Martin Roelofs (www.roelofs-coaching.nl)
  Desc:     Marks and selects the first word
  Licence:  This work is licensed under the Creative Commons Attribution 4.0 International License.
            To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/
      or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

*/

(function ($) {

  $.fn.firstWord = function(options) {

    var settings = $.extend({
                     skipWords: ['het','een','de','van','op','ter','ten','te','in','of','off','a','the','der'],
                   }, options),
        result   = $();

    this.each(function(){

      var textNode = this.firstChild;

      if (textNode && textNode.nodeType == 3) {
        var words= textNode.nodeValue.split(" ");
        if (words[0]) {
          var firstWord= words.shift();
          if (words[0] && ($.inArray(firstWord.toLowerCase(), settings.skipWords) > -1)) {
            firstWord += ' ' + words.shift();
          }
          textNode.nodeValue= ' ' + words.join(' ');
          var newNode= document.createElement('span');
          newNode.appendChild(document.createTextNode(firstWord));
          $.merge(result, $(this.insertBefore(newNode, textNode)));
        }
      }

    });
    return result;
  }

})(jQuery);
