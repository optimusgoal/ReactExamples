import react from 'react';
import reactDOM from 'react-dom';

import searchBar from './components/search_bar';

const API_KEY = 'fadfsafsdgsdgae2143241-24qkw2U142';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));