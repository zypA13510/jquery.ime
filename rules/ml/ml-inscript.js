( function ( $ ) {
	'use strict';

	var inscript = {
		id: 'ml-inscript',
		name: 'Malayalam InScript',
		description: 'Malayalam InScript',
		date: '2012-10-03',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Junaid P V',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 2,
		patterns: [
			[ '`', 'ൊ' ],
			[ '~', 'ഒ' ],
			[ '_', 'ഃ' ],
			[ '=', 'ൃ' ],
			[ '\\+', 'ഋ' ],
			[ '\\\\', '\u200C' ],
			[ 'q', 'ൗ' ],
			[ 'Q', 'ഔ' ],
			[ 'w', 'ൈ' ],
			[ 'W', 'ഐ' ],
			[ 'e', 'ാ' ],
			[ 'E', 'ആ' ],
			[ 'r', 'ീ' ],
			[ 'R', 'ഈ' ],
			[ 't', 'ൂ' ],
			[ 'T', 'ഊ' ],
			[ 'y', 'ബ' ],
			[ 'Y', 'ഭ' ],
			[ 'u', 'ഹ' ],
			[ 'U', 'ങ' ],
			[ 'i', 'ഗ' ],
			[ 'I', 'ഘ' ],
			[ 'o', 'ദ' ],
			[ 'O', 'ധ' ],
			[ 'p', 'ജ' ],
			[ 'P', 'ഝ' ],
			[ '\\[', 'ഡ' ],
			[ '\\{', 'ഢ' ],
			[ 'ണ്\\]', 'ൺ' ],
			[ 'ന്\\]', 'ൻ' ],
			[ 'ര്\\]', 'ർ' ],
			[ 'ല്\\]', 'ൽ' ],
			[ 'ള്\\]', 'ൾ' ],
			[ 'ക്\\]', 'ൿ' ],
			[ '\\}', 'ഞ' ],
			[ 'a', 'ോ' ],
			[ 'A', 'ഓ' ],
			[ 's', 'േ' ],
			[ 'S', 'ഏ' ],
			[ 'd', '്' ],
			[ 'D', 'അ' ],
			[ 'f', 'ി' ],
			[ 'F', 'ഇ' ],
			[ 'g', 'ു' ],
			[ 'G', 'ഉ' ],
			[ 'h', 'പ' ],
			[ 'H', 'ഫ' ],
			[ 'j', 'ര' ],
			[ 'J', 'റ' ],
			[ 'k', 'ക' ],
			[ 'K', 'ഖ' ],
			[ 'l', 'ത' ],
			[ 'L', 'ഥ' ],
			[ ';', 'ച' ],
			[ ':', 'ഛ' ],
			[ '\'', 'ട' ],
			[ '\'', 'ഠ' ],
			[ 'z', 'െ' ],
			[ 'Z', 'എ' ],
			[ 'x', 'ം' ],
			[ 'c', 'മ' ],
			[ 'C', 'ണ' ],
			[ 'v', 'ന' ],
			[ 'b', 'വ' ],
			[ 'B', 'ഴ' ],
			[ 'n', 'ല' ],
			[ 'N', 'ള' ],
			[ 'm', 'സ' ],
			[ 'M', 'ശ' ],
			[ '<', 'ഷ' ],
			[ '/', 'യ' ] ]
	};

	$.ime.register( inscript );

}( jQuery ) );
