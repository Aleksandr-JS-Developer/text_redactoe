import {get_id, new_event} from '../supp_functions';
import {set_style} from '../add_styles';
export const set_listener_text_bold = () => {
	get_id( 'bold_bttn' ).addEventListener( 'click', ()=>{
		set_style( 'bold' );
	});
}