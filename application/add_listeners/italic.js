import {get_id, new_event} from '../supp_functions';
import {set_style} from '../add_styles';
export const set_listener_text_italic = () => {
	get_id( 'italick_bttn' ).addEventListener( 'click', ()=>{
		set_style( 'italic' );
	});
}