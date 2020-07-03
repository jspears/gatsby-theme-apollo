import {createContext} from 'react';

export const pageContext = createContext({});
export const PageContextProvider = pageContext.Provider;
export const PageContextConsumer = pageContext.Consumer;
