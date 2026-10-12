import { useEffect } from "react";
import {
  CheckCircle,
  CircleX,
  TriangleAlert,
  CircleHelp,
  Lock,
  X,
  Trash2,
} from "lucide-react";

const CustomAlert = ({
  type = "success",
  title,
  message,
  onClose,
  confirmText = "OK",
  cancelText = "Cancel",
  onConfirm,
  showCancel = false,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const alertConfig = {
    success: {
      icon: CheckCircle,
      iconStyle: "text-green-400 bg-green-400/10",
      buttonStyle:
        "bg-green-500 hover:bg-green-600",
    },

    error: {
      icon: CircleX,
      iconStyle: "text-red-400 bg-red-400/10",
      buttonStyle:
        "bg-red-500 hover:bg-red-600",
    },

    warning: {
      icon: TriangleAlert,
      iconStyle: "text-yellow-400 bg-yellow-400/10",
      buttonStyle:
        "bg-yellow-500 hover:bg-yellow-600",
    },

    confirm: {
      icon: CircleHelp,
      iconStyle: "text-blue-400 bg-blue-400/10",
      buttonStyle:
        "bg-blue-500 hover:bg-blue-600",
    },

    delete: {
      icon: Trash2,
      iconStyle: "text-red-400 bg-red-400/10",
      buttonStyle:
        "bg-red-500 hover:bg-red-600",
    },

    permission: {
      icon: Lock,
      iconStyle: "text-orange-400 bg-orange-400/10",
      buttonStyle:
        "bg-orange-500 hover:bg-orange-600",
    },
  };

  const config = alertConfig[type] || alertConfig.success;

  const Icon = config.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

      {/* Alert Box */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#242424] p-6 text-white shadow-2xl animate-[scaleIn_0.2s_ease-out]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${config.iconStyle}`}
        >
          <Icon size={32} strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="mt-5 text-center">

          <h2 className="text-xl font-semibold">
            {title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            {message}
          </p>

        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-3">

          {showCancel && (
            <button
              onClick={onClose}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              {cancelText}
            </button>
          )}

          <button
            onClick={onConfirm || onClose}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition ${config.buttonStyle}`}
          >
            {confirmText}
          </button>

        </div>
      </div>
    </div>
  );
};

export default CustomAlert;