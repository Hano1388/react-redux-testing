import React from 'react';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

const App = () => {
  return (
    <React.Fragment>
      <CommentBox />
      <CommentList />
    </React.Fragment>
  );
};

export default App;
