import {get_id} from '../supp_functions';
import {set_style} from '../add_styles';
export const set_listener_text_feel = () => {
	get_id( 'feel_bttn' ).addEventListener( 'click', ()=>{
		set_style( 'feel' );
	});
}