"use client";
import { useEffect } from "react";

export default function Tracker() {
  useEffect(() => {
    const track = async () => {
      try {
        await fetch("http://127.0.0.1:8000/api/analytics/track/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ path: window.location.pathname }),
          keepalive: true,
        });
      } catch (e) {}
    };

    track();
  }, []);

  return null;
}
