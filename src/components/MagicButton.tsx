"use client";

import React, { ReactNode } from "react";

interface MagicButtonProps {
  title: string;
  icon?: ReactNode;
  position?: "left" | "right";
  onClick?: () => void;
  className?: string;
}

const MagicButton = ({
  title,
  icon,
  position = "left",
  onClick,
  className = "",
}: MagicButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 ease-in-out focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 ${className}`}
    >
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transform translate-y-full transition-transform duration-200 ease-in-out group-hover:translate-y-0"></span>
      </span>
      <span className="relative flex items-center gap-2">
        {position === "left" && icon && <span>{icon}</span>}
        {title}
        {position === "right" && icon && <span>{icon}</span>}
      </span>
    </button>
  );
};

export default MagicButton;
