import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, CheckCircle2, AlertCircle, XCircle, Info, Check } from 'lucide-react';
import { useNotifications } from '@/contexts/NotificationContext';
import { formatDistanceToNow } from 'date-fns';

const NotificationPanel: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { notifications, unreadCount, markAsRead, markAllAsRead, removeNotification, clearAll } = useNotifications();

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="text-green-500" size={20} />;
      case 'info':
        return <Info className="text-blue-500" size={20} />;
      case 'warning':
        return <AlertCircle className="text-amber-500" size={20} />;
      case 'error':
        return <XCircle className="text-red-500" size={20} />;
      default:
        return <Bell className="text-gray-500" size={20} />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-20 right-4 w-96 z-40"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="glass-card rounded-xl shadow-xl backdrop-blur-lg border border-white/10">
            {/* Header */}
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-lg">Notifications</h3>
                  {unreadCount > 0 && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-primary hover:text-primary/90 font-medium flex items-center"
                >
                  <Check size={14} className="mr-1" />
                  Mark all as read
                </button>
                <button
                  onClick={clearAll}
                  className="text-xs text-foreground/70 hover:text-foreground font-medium"
                >
                  Clear all
                </button>
              </div>
            </div>

            {/* Notification List */}
            <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
              <AnimatePresence initial={false}>
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      layout
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`p-4 border-b border-white/5 hover:bg-white/5 transition-colors relative ${
                        !notification.read ? 'bg-primary/5' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          {notification.title && (
                            <p className="font-medium text-sm mb-0.5">{notification.title}</p>
                          )}
                          <p className="text-sm text-foreground/70">{notification.message}</p>
                          <p className="text-xs text-foreground/50 mt-1">
                            {formatDistanceToNow(new Date(notification.time), { addSuffix: true })}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="text-primary hover:text-primary/90"
                              title="Mark as read"
                            >
                              <Check size={16} />
                            </button>
                          )}
                          <button
                            onClick={() => removeNotification(notification.id)}
                            className="text-foreground/50 hover:text-foreground/70"
                            title="Remove notification"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="p-8 text-center text-foreground/50">
                    <Bell size={24} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No notifications yet</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationPanel; 