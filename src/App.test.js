import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import App from './App';
 
//smoke test
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<app />, div);
    ReactDOM.unmountComponentAtNode(div);
});
