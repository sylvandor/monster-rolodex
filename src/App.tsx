import {useState, useEffect, ChangeEvent} from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import './App.css';
import {getData} from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [search, setSearch] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users);
    }
    fetchUsers();
  }, []);

  const onSearchChange = ({target: {value}}: ChangeEvent<HTMLInputElement>): void => setSearch(value.toLowerCase());

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
