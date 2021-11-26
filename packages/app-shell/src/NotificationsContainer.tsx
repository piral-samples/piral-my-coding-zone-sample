import * as React from "react";

export interface NotificationsProps {}

export const NotificationsContainer: React.FC<NotificationsProps> = ({ children }) => (
  <div className="notifications">{children}</div>
);
