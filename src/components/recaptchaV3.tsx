"use client";
import React, { useState } from "react";

export default function Captcha({ onVerify }: { onVerify: (token: string) => void }) {
  const [checked, setChecked] = useState(false);
  const [solved, setSolved] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    if (isChecked && !solved) {
      setSolved(true);
      // Simulate a token, in real captcha this would be from the provider
      onVerify("dummy-captcha-token");
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="captcha-checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={solved}
          className="accent-purple-500 w-5 h-5"
        />
        <label htmlFor="captcha-checkbox" className="text-sm text-gray-700">
          I'm not a robot
        </label>
      </div>
      {solved && (
        <span className="text-green-600 font-medium mt-2">
          Captcha solved!
        </span>
      )}
    </div>
  );
}