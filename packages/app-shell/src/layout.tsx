import * as React from "react";
import {
  ComponentsState,
  ErrorComponentsState,
  Menu,
  Notifications,
} from "piral";
import { Link } from "react-router-dom";
import { ErrorInfo, NotFoundErrorInfo } from "./ErrorInfo";
import { GeneralLayout } from "./GeneralLayout";
import { NotificationsContainer } from "./NotificationsContainer";
import { Toast } from "./Toast";

const defaultTiles = (
  <>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://www.meetup.com/de-DE/My-Coding-Zone/">Meetup</a>
        <br />
        for the cool devs
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://youtube.com/GregorBiswanger">YouTube</a>
        <br />
        knowledge for you
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://discord.gg/rV67m6s">Discord</a>
        <br />
        discussions and more
      </div>
    </div>
  </>
);

export const errors: Partial<ErrorComponentsState> = {
  not_found: NotFoundErrorInfo,
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo,
  DashboardContainer: ({ children }) => (
    <div>
      <h1>MY CODING ZONE!</h1>
      <p>Your friendly developer community</p>
      <div className="tiles">
        {defaultTiles}
        {children}
      </div>
    </div>
  ),
  DashboardTile: ({ columns, rows, children }) => (
    <div className={`tile cols-${columns} rows-${rows}`}>{children}</div>
  ),
  Layout: (props) => (
    <GeneralLayout
      notifications={<Notifications />}
      menu={<Menu type="general" />}
    >
      {props.children}
    </GeneralLayout>
  ),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Piral
            </Link>
            <button
              aria-label="Toggle navigation"
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="navbar-toggler mr-2"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ${
                collapsed ? "" : "show"
              }`}
              aria-expanded={!collapsed}
            >
              <ul className="navbar-nav flex-grow">{children}</ul>
            </div>
          </div>
        </nav>
      </header>
    );
  },
  MenuItem: ({ children }) => <li className="nav-item">{children}</li>,
  NotificationsHost: NotificationsContainer,
  NotificationsToast: Toast,
};
