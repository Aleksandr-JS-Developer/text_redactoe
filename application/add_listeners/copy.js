import {get_id, create_node, clean_tags} from '../supp_functions';
export const set_lisener_copy = () => {
	get_id( 'copy' ).addEventListener( 'click', ()=>{
		let text = get_id( 'enter_text' ).innerHTML;
		let _text_redactor = get_id( '_text_redactor' );
		let node = create_node( 'textarea' );
		// node.setAttribute( 'hidden', 'hidden' );
		_text_redactor.appendChild( node );
		node.value = clean_tags( text );
		console.log( node.value );
		node.select();
	  document.execCommand( 'copy' );
		node.remove();
	});
}