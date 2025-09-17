import React from "react";
import { Link } from "react-router-dom";

export default function NavigationCard({ icon, text, to }) {
  return (
    <Link
      to={to}
      className="mx-1 flex items-center space-x-2 pr-10 cursor-pointer hover:text-green-400"
    >
      <div className="text-gray-400 text-2xl">{icon}</div>
      <span className="text-white font-semibold">{text}</span>
    </Link>
  );
}
