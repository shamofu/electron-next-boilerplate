import React from 'react';

import stylesheet from '../styles/start.css';

export default () =>
  <React.Fragment>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <p>Electron + Next</p>
  </React.Fragment>;