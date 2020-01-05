import React from 'react';
import Comments from './comments/containers/Comments';
import HiddenMessage from './hiddenmessage/HiddenMessage';
import ConnectedRouterRoutes from './connected-router/ConnectedRouterRoutes';

function App() {
  return (
    <div>
      <h2 className="header">
        Examples of testing react components with react testing library and
        comparison with enzyme.
      </h2>

      <h3 className="header">Hidden message</h3>
      <HiddenMessage />

      <hr />

      <h3 className="header">Comments</h3>
      <Comments />

      <h3 className="header">Connected Router</h3>
      <ConnectedRouterRoutes />
    </div>
  );
}

export default App;
