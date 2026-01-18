import { useState, useEffect } from "react";

const Alert = ({ message, type = "info", onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  const alerts = {
    success: {
      bg: "bg-green-50",
      border: "border-green-400",
      text: "text-green-800",
      icon: "✅",
      title: "Success"
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-400",
      text: "text-red-800",
      icon: "❌",
      title: "Error"
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-400",
      text: "text-yellow-800",
      icon: "⚠️",
      title: "Warning"
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-400",
      text: "text-blue-800",
      icon: "ℹ️",
      title: "Info"
    }
  };

  const alert = alerts[type] || alerts.info;

  return (
    <div className={`fixed top-20 right-4 max-w-md border-l-4 rounded-lg shadow-xl p-4 fade-in ${alert.bg} ${alert.border} ${alert.text}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{alert.icon}</span>
        <div className="flex-1">
          <p className="font-semibold text-sm">{alert.title}</p>
          <p className="text-sm mt-1">{message}</p>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          className="flex-shrink-0 text-lg hover:opacity-70 transition-opacity"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Alert;
