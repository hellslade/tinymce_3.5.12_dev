/**
 * editor_plugin_src.js
 *
 * Copyright 2018, Grigorev Aleksandr
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	tinymce.create('tinymce.plugins.UnrlnStr', {
		init: function(ed, url) {
			ed.addCommand('mceUnrlnStr', function() {
				ed.windowManager.open({
					file: url + '/unrlnstr_dlg.htm',
					width: 420,
					height: 110,
					inline: 1
				}, {
					plugin_url: url, // Plugin absolute URL
				});
			});

			ed.addButton('unrlnStr', {
				title: 'unrlnstr.unrlnstr_desc', //'print.print_desc',
				cmd: 'mceUnrlnStr',
				image: url + '/img/icon.gif'
			});
		},

		getInfo: function() {
			return {
				longname: 'Underline String',
				author: 'Grigorev Aleksandr',
				authorurl: 'http://youbp.ru',
				infourl: 'http://youbp.ru',
				version: tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('unrlnStr', tinymce.plugins.UnrlnStr);
})();
