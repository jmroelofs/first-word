/*

    Script:     first word
    Version:    1.6, jQuery plugin version
    Authors:    Jan Martin Roelofs (www.roelofs-coaching.nl)
    Desc:       Marks and selects the first word
    Licence:    This work is licensed under the Creative Commons Attribution 4.0 International License.
                To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/
                or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

*/

(function ($) {
    'use strict';

    $.fn.firstWord = function(options) {

        const settings = $.extend( {}, $.fn.firstWord.defaults, options );

        return this.map(function() {

            const textNode = this.firstChild;

            if (textNode && textNode.nodeType == 3) {
                const words = textNode.nodeValue.split(' ');
                if (words[0]) {

                    const firstWords = [words.shift()];
                    while (words[0] && settings.skipWords.indexOf(firstWords[firstWords.length-1].toLowerCase()) > -1)
                        firstWords.push(words.shift());

                    textNode.nodeValue = ' ' + words.join(' ');
                    const newNode = document.createElement('span');
                    newNode.appendChild(document.createTextNode(firstWords.join(' ')));
                    return this.insertBefore(newNode, textNode);
                }
            }
        });
    }

    $.fn.firstWord.defaults = {
        skipWords: ['een','de','der','het','in','of','op','te','ten','ter','van',
                    'a','the','off'],
    };

})(jQuery);
