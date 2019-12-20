import {get_id} from '../supp_functions';
import {set_style} from '../add_styles';
export const set_listener_text_tint = () => {
	get_id( 'tint_bttn' ).addEventListener( 'click', ()=>{
		set_style( 'tint' );
	});
}