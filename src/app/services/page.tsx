"use client";

import { useEffect } from "react";

export default function ServicesIndex() {
  useEffect(() => {
    window.location.replace("/#svc");
  }, []);

  return (
    <main className="inner-page">
      <div className="subpage-inner">
        <p className="eyebrow">HVAC Services</p>
        <h1>HVAC Services</h1>
        <p style={{ color: "var(--dim)", marginTop: 12 }}>
          Taking you to our services on the home page…
        </p>
      </div>
    </main>
  );
}
