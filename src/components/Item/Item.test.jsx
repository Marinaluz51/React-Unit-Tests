import {render, screen} from '@testing-library/react';
import Item from './Item';

const mockedItem = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
      other: {
          'official-artwork': {
              front_default: ''
          }
      }
  }
};

describe('Item Component', () => {
  it('should render correctly', () => {
      render(<Item item={mockedItem} />);
      expect(screen.getByTestId('list-item-1')).toBeInTheDocument();
  });
});
