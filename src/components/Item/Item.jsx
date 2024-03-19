import { useDispatch, useSelector } from 'react-redux';
import { favoritesActions } from '../../store/favorites';
import Heart from '../Heart';
import './style.css';

function Item({ item }) {
  const { name, sprites } = item;
  const sprite = sprites.other['official-artwork'].front_default;

  const favorites = useSelector (({ favorites }) => favorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.includes(item.id);

  const handleClick = () => {
      if (isFavorite) {
          dispatch(favoritesActions.remove(item));
      } else {
          dispatch(favoritesActions.add(item));
      }
  };




    return (
      <li className="list-item" data-testid={`list-item-${item.id}`}>
            <div className="list-item-image-wrapper">
                <img alt={name} className="list-item-image" src={sprite} />
            </div>
            <p className='Capname'>{name}</p>
            <div className='list-item-heart-wrapper'>
                <Heart onClick={handleClick}
                selected={isFavorite}
                testId={`heart-${item.id}`}/>
            </div>
        </li>
    );
  }

  export default Item;
