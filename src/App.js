import {useState, useEffect} from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, []);

  const onSearchChange = event => setSearch(event.target.value.toLowerCase());

  useEffect(() => {
    setFilteredMonsters(monsters.filter(monster => monster.name?.toLowerCase()?.includes(search)))
  }, [monsters, search])

  return (
    <div className="App">
      <div className={'app-title'}>Monsters Rolodex</div>
      <SearchBox onSearchChange={onSearchChange} placeholder={'Search Monsters'} className={'monsters-search-box'}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

export default App;
