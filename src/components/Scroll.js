import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '0.1px dashed transparent', height: '600px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;