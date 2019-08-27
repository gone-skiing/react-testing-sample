import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HiddenMessage from '../HiddenMessage';

Enzyme.configure({adapter: new Adapter()});

// noinspection SpellCheckingInspection
describe('HiddenMessage enzyme', () => {
  it('Shallow rendering', () => {
    const wrapper = shallow(<HiddenMessage initialShow={true} />);
    expect(wrapper.find('Fade').props()).toEqual({
      in: true,
      children: <div>Hello world</div>,
    });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('Fade').props()).toEqual({
      in: false,
      children: <div>Hello world</div>,
    });
  });

  /*
   * Things to try:
   * - set onClick of the button to this.tgogle instead of this.toggle. My test continues to work, but my component is broken.
   * - rename toggle to handleButtonClick (and update the corresponding onClick reference). My test breaks despite this being a refactor.
   */
  it('toggle toggles the state of show', () => {
    const wrapper = shallow(<HiddenMessage initialShow={true} />);
    expect(wrapper.state().show).toBe(true); // initialized properly

    wrapper.instance().toggle();
    wrapper.update();
    expect(wrapper.state().show).toBe(false); // toggled

    console.log(wrapper.debug());
  });
});
