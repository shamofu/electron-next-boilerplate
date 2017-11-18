import React from 'react';

import stylesheet from '../styles/start.css';

export default () =>
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <p>Electron + Next</p>
  </div>;