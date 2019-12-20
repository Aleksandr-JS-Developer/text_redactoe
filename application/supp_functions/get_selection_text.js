export const get_selection_text = () => {
		let txt = ``;
		if ( txt = window.getSelection ) {
  		txt = window.getSelection().toString();
		} else {
  		txt = document.selection.createRange().text;
		}
	return txt;
}