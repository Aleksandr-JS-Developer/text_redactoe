import { get_id } from './get_id.js';
export const render_on_text_place = ( elem, options = {type:'none'} ) => {
	let enter_text = get_id( 'enter_text' );
	if( options.type === 'none' ){
		enter_text.innerHTML += elem;
	} else if( options.type === 'video' ){
		enter_text.innerHTML += `<br /><br />${elem}<br />`;
	}
}