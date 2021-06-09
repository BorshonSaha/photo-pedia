import React, {useState} from 'react';

const SearchBar = ({ searchText }) => {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchText(text);
      }

    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image by Name..." />
                    <button class="px-8 rounded-r-lg bg-green-400  text-gray-800 font-bold p-4 uppercase border-t border-b border-r">Search</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;