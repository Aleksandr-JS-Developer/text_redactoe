export const cut_url = ( str, recursed ) => {
	let playlist = str.match( /&list=/i );
	if( playlist === null || recursed === true){
		let result = str.match( /watch\?v=/i );
		if( result === null ){
			return null;
		}
		str = str.split('');
		str.splice( result.index, result[0].length, 'embed/' );
		str = str.join('');
		return str;
	} else {
		let new_str = cut_url( str, true );
		let result = new_str.match( /&list=/i );
		if( result === null ){
			return null;
		}
		new_str = new_str.split('');
		new_str.splice( result.index, str.length );
		new_str = new_str.join('');
		return new_str;
	}
}