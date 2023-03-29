import React ,{useState} from 'react';
import axios from "axios";
import './App.css';
import Card from './components/Card/Card.jsx'
import MySelect from "./components/UI/select/MySelect";


function App() {
    const [search, setSearch] = useState('');
    const [bookData, setData] = useState([]);
    let num = 0;
    const searchBook = (evt) => {
        if(evt.key === 'Enter')
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyBl2uLoC1d430bPzm78Ssa5IQCGgaYuAt0')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err));
        }
    }
    return (
        <div>
            <div className='App'>
                <h1>Search for books</h1>
                <div className='input'>
                    <input
                        placeholder='Enter your book name'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        onKeyPress={searchBook}
                    />
                    <button>Find</button>
                </div>


                <div className='Select'>
                    <div className='Select1'>Categories
                        <MySelect
                            options={[
                                {value: 'all', name: 'all'},
                                {value: 'biography', name: 'biography'},
                                {value: 'computers', name: 'computers'},
                                {value: 'history', name: 'history'},
                                {value: 'medical', name: 'medical'},
                                {value: 'poetry', name: 'poetry'},
                            ]}
                        />
                    </div>

                    <div>Sorting by
                        <MySelect
                            options={[
                                {value: 'relevance', name: 'relevance'},
                                {value: 'newest', name: 'newest'},
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className='Find'>Find {num} results</div>

            <div className='Block'>
                {
                    <Card book={bookData}/>
                }
            </div>

            <div className='Load'>
                <button className='button'>Load more</button>
            </div>
        </div>
    );
}

export default App;
