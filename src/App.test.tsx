import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('Test App component', () => {
  it('case: expect to match snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
});

  it('case: expect render correctly', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.find('.App').length).toEqual(1);
  });

  it('case: expect button inventory to be 1', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('button[id="inventory"]').length).toEqual(1);
});
});