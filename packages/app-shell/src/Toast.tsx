import * as React from "react";
import type { NotificationsToastProps } from "piral-notifications";

export const Toast: React.FC<NotificationsToastProps> = ({
  options,
  onClose,
  children,
}) => (
  <div className={`notification-toast ${options.type}`}>
    <div className="notification-toast-details">
      {options.title && (
        <div className="notification-toast-title">{options.title}</div>
      )}
      <div className="notification-toast-description">{children}</div>
    </div>
    <div className="notification-toast-close" onClick={onClose} />
  </div>
);
