import React from 'react';

const SearchBox = (props) => {
	const debouncedSave = useRef(debounce(nextVal => props.setSearchValue(nextVal), 1000))
		.current;
	
	const handleSearch = (event) =>{

		const nextVal = event.target.value;
		//props.setSearchValue(nextVal);
		
		debouncedSave(nextVal);
	}
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={handleSearch}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBox;
