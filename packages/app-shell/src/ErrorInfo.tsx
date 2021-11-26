import * as React from "react";
import { Link } from "react-router-dom";

export interface ErrorInfoProps {}

export const ErrorInfo: React.FC<ErrorInfoProps> = ({ children }) => (
  <div>
    <h1>Error</h1>
    {children}
  </div>
);

export interface NotFoundErrorInfoProps {}

export const NotFoundErrorInfo: React.FC<NotFoundErrorInfoProps> = () => (
  <div>
    <p className="error">
      Could not find the requested page. Are you sure it exists?
    </p>
    <p>
      Go back <Link to="/">to the dashboard</Link>.
    </p>
  </div>
);
