import './bootstrap';
import './bootstrap.services';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import {LoadScreen} from "./components/LoadScreen/LoadScreen";
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <LoadScreen />
  </React.StrictMode>,
);
