import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './Card';

//smoke test:
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    
    ReactDOM.unmountComponentAtNode(div)
});

//snapshot test:
it('renders the UI as expeted', () => {
    const tree = renderer.create(<List  />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the UI as expeted with no card', () => {
    const tree = renderer.create(<List  />).toJSON();
    expect(tree).toMatchSnapshot();
});