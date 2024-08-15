"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 0.6, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
