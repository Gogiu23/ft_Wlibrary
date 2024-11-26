import { useRef, useState } from "react";

export default function Wheel() {
  const circleRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startAngleRef = useRef(null);

  const BORDER_WIDTH = 150;

  const getAngle = (x, y, cx, cy) => {
    return Math.atan2(y - cy, x - cx) * (180 / Math.PI);
  };

  const isOnBorder = (x, y, rect) => {
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const radius = rect.width / 2;

    const distance = Math.sqrt((x - cx) ** 2 + (y - cy));
    return distance >= radius - BORDER_WIDTH && distance <= radius;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = circleRef.current.getBoundingClientRect();
    if (!isOnBorder(e.clientX, e.clientY, rect)) return;
    startAngleRef.current = getAngle(
      e.clientX,
      e.clientY,
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
    );
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = circleRef.current.getBoundingClientRect();
    const currentAngle = getAngle(
      e.clientX,
      e.clientY,
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
    );
    if (startAngleRef.current !== null) {
      const deltaAngle = currentAngle - startAngleRef.current;

      if (deltaAngle > 5) {
        setCurrentValue((prev) => prev + 1);
        startAngleRef.current = currentAngle;
      } else if (deltaAngle < -5) {
        setCurrentValue((prev) => prev - 1);
        startAngleRef.current = currentAngle;
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startAngleRef.current = null;
  };
  const handleTouchStart = (e) => {
    setIsDragging(true);

    const rect = circleRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    if (!isOnBorder(touch.clientX, touch.clientY, rect)) return;
    startAngleRef.current = getAngle(
      touch.clientX,
      touch.clientY,
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
    );
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const rect = circleRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const currentAngle = getAngle(
      touch.clientX,
      touch.clientY,
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
    );

    if (startAngleRef.current !== null) {
      const deltaAngle = currentAngle - startAngleRef.current;

      if (deltaAngle > 5) {
        setCurrentValue((prev) => prev + 1);
        startAngleRef.current = currentAngle;
      } else if (deltaAngle < -5) {
        setCurrentValue((prev) => prev - 1);
        startAngleRef.current = currentAngle;
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    startAngleRef.current = null;
  };

  return (
    <>
      <div id="ipodBox">
        <div className="screen"></div>
        <div
          id="circle"
          ref={circleRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <span id="number">{currentValue}</span>
        </div>
      </div>
    </>
  );
}
