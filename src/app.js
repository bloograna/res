// /* eslint-disable import/first,react/no-render-return-value */
// import React from 'react';
// import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import { Provider } from 'react-redux';
// import { StoreFactory } from './store';
// import { HashRouter } from 'react-router-dom';
// import LayoutContainer from './components/starter';
// // import { Route } from 'react-router-dom';
//
// const store = StoreFactory.getStore();

// render(
//   <Provider store={store}>
//     <HashRouter>
//       <AppContainer>
//         <div>
//           <LayoutContainer />
//         </div>
//       </AppContainer>
//     </HashRouter>
//   </Provider>,
//   document.getElementById('app')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './main/MainPage';

ReactDOM.render(<MainPage />, document.querySelector('#app'));
