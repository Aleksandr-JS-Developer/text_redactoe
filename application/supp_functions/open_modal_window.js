import {get_id, close_modal_window} from '../supp_functions';
export const open_modal_window = e => {
	e.stopPropagation();
	get_id( '_text_redactor' ).classList.add( 'low_opacity' );
	get_id( 'modal_window_container' ).classList.remove( 'none' );
	get_id( 'close_modal' ).addEventListener( 'click', ()=>{
		close_modal_window( e );
	},{once:true});
}