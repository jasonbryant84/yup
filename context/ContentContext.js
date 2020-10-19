import React from 'react';

const defaultState = {},
    ContentContext = React.createContext(defaultState);

export default ContentContext;

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore