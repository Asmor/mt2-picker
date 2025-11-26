import "./Theme.scss";
import "./App.scss";
import "./util/chromium-scrollbars.scss";
import { Provider as JotaiProvider } from "jotai";
import {
  Suspense,
  type FunctionComponent,
  type PropsWithChildren,
} from "react";
import { HashRouter } from "react-router";

export const AppProviders: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <HashRouter>
      <Suspense>
        <JotaiProvider>{children}</JotaiProvider>
      </Suspense>
    </HashRouter>
  );
};
