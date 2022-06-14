import React from "react";

import { PageRenderer } from "./pages/PageRenderer";

import { Provider } from "./translation";

export const App = () => (
  <Provider>
    <PageRenderer />
  </Provider>
);
