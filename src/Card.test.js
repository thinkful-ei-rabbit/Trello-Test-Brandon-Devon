import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

//smoke test:
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card 
        title="Card one"
        content="card content"
        />, 
        div
    );
    
    ReactDOM.unmountComponentAtNode(div)
});

//snapshot test:
it('renders the UI as expeted', () => {
    const tree = renderer.create(<Card  />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the UI as expeted with no card', () => {
    const tree = renderer.create(<Card  />).toJSON();
    expect(tree).toMatchSnapshot();
});