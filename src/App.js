import React from 'react';
import Comments from './comments/containers/Comments';

function App() {
  return (
    <div>
      <h3 className="header">
        Examples of testing react components with react testing library and
        comparison with enzyme.
      </h3>
      <Comments />
    </div>
  );
}

export default App;
