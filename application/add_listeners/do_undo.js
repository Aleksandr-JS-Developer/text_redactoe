import {get_id} from '../supp_functions';
import {undo, _do} from '../data.js';
export const set_do_undo = () => {
	get_id( 'undo_bttn' ).addEventListener( 'click', undo );
	get_id( 'undo_bttn' ).removeAttribute( 'disabled' );
	get_id( 'do_bttn' ).addEventListener( 'click', _do );
	get_id( 'do_bttn' ).removeAttribute( 'disabled' );
}
