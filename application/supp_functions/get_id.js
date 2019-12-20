export const get_id = ( id, container = null ) => {
	if( container === null ){
		return document.getElementById( id );
	} else {
		return container.getElementById( id );
	}	
}