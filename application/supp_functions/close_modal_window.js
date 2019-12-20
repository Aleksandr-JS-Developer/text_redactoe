import {get_id} from '../supp_functions';
export const close_modal_window = e => {
	e.stopPropagation();
	get_id( '_text_redactor' ).classList.remove( 'low_opacity' );
	get_id( 'modal_window_container' ).classList.add( 'none' );
	get_id( 'content_in_modal' ).innerHTML = null;
}