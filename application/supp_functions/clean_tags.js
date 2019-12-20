import {create_node} from '../supp_functions';
export const clean_tags = text => {
	let node = create_node( 'div' );
			node.innerHTML = text;
	let targets = [...node.querySelectorAll( '.rem' )];
	targets = targets.map( item =>{
		if( item.hasAttribute( 'id' ) ){
			item.removeAttribute( 'id' );
		}
		if( item.hasAttribute( 'class' ) ){
			item.removeAttribute( 'class' );
		}
		return item;
	});
	return node.innerHTML;
}