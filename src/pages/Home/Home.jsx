
import { List } from '../../components';
import { useEffect, useState } from 'react';
import './Home.css';
import { useDispatch } from 'react-redux';
import { favoritesActions } from '../../store/favorites';


const Home = () => {

  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);

  const getPokemonInfo = async (data) => {
    const promises = data.map ((pokemon) => {
      return fetch(pokemon.url).then((response) => response.json());
    });
    Promise.all(promises).then( ( results) => {
      setPokemons(results);
    });
  };
  const getPokemons = async () => {

    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=20'
    ).then((response) => response.json()).then((data) => {
          getPokemonInfo(data.results);
          });

    };

    useEffect(() => {
      const localData = localStorage.getItem('react-redux');
      if (localData) {
          const parsed = JSON.parse(localData);
          const { favorites } = parsed;
          dispatch(favoritesActions.init(favorites));
      }
      getPokemons();
    }, []);




    return (
        <div>
          <div className='centerName'>
        <h1>Pokemons </h1>
          </div>
        <List items={pokemons} />


    </div>
    );
};

export default Home;
