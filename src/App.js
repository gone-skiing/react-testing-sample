import React from 'react';
import Comments from './comments/containers/Comments';
import HiddenMessage from './hiddenmessage/HiddenMessage';

function App() {
  return (
    <div>
      <h2 className="header">
        Examples of testing react components with react testing library and
        comparison with enzyme.
      </h2>

      <h3>Hidden message</h3>
      <HiddenMessage />

      <hr />

      <h3 className="header">Comments</h3>
      <Comments />
    </div>
  );
}

export default App;
