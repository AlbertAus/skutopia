import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import OrdersOutput from './orderContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('Test App component', () => {
  it('case: expect to match snapshot', () => {
    const wrapper = shallow(<OrdersOutput />);

    expect(wrapper).toMatchSnapshot();
});

  it('case: expect render correctly', () => {
      const wrapper = shallow(<OrdersOutput />);

      expect(wrapper.find('table').length).toEqual(1);
  });
});