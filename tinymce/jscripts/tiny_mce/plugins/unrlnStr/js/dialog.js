tinyMCEPopup.requireLangPack();

var UnrlnStrDialog = {
	init: function() {
		var f = document.forms[0];

		// Get the selected contents as text and place it in the input
		f.parametr.value = tinyMCEPopup.editor.selection.getContent({
			format: 'text'
		});
	},

	insert: function() {
		// Insert the contents from the input into the document

		prefix = document.forms[0].prefix.value;
		suffix = document.forms[0].suffix.value;
		parametr = document.forms[0].parametr.value;
		var ustr = "";
		if (prefix != "" && suffix != "") {
			ustr = '<table style="width: 98%;"  align="center"><tbody><tr>' +
				'<td><p>' + prefix + '</p></td>' +
				'<td style="border-bottom: #000000 1px solid; width: 100%;"><p style="text-align: center;">' +
				parametr + '</p></td>' +
				'<td><p>' + suffix + '</p></td>' +
				'</tr></tbody></table>';
		} else if (prefix != "") {
			ustr = '<table style="width: 98%;"  align="center"><tbody><tr>' +
				'<td><p>' + prefix + '</p></td>' +
				'<td style="border-bottom: #000000 1px solid; width: 100%;"><p style="text-align: center;">' +
				parametr + '</p></td>' +
				'</tr></tbody></table>';
		} else if (suffix != "") {
			ustr = '<table style="width: 98%;"  align="center"><tbody><tr>' +
				'<td style="border-bottom: #000000 1px solid; width: 100%;"><p style="text-align: center;">' +
				parametr + '</p></td>' +
				'<td><p>' + suffix + '</p></td>' +
				'</tr></tbody></table>';
		} else {
			ustr = '<table style="width: 98%;"  align="center"><tbody><tr>' +
				'<td style="border-bottom: #000000 1px solid; width: 100%;"><p style="text-align: center;">' +
				parametr + '</p></td>' +
				'</tr></tbody></table>';
		}

		tinyMCEPopup.editor.execCommand('mceInsertContent', false, ustr);
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(UnrlnStrDialog.init, UnrlnStrDialog);
