import type React from 'react';
import { useState, useRef, useCallback, useEffect } from 'react';
import { GripVertical } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const getPositionFromEvent = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return 50;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = (x / rect.width) * 100;
      return Math.min(100, Math.max(0, pct));
    },
    [],
  );

  const handleMove = useCallback(
    (clientX: number) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPosition(getPositionFromEvent(clientX));
      });
    },
    [getPositionFromEvent],
  );

  // Mouse events
  const onMouseDown = useCallback(() => setIsDragging(true), []);

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onMouseUp = () => setIsDragging(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isDragging, handleMove]);

  // Touch events
  const onTouchStart = useCallback(() => setIsDragging(true), []);

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    },
    [handleMove],
  );

  const onTouchEnd = useCallback(() => setIsDragging(false), []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-[#28271F] aspect-video select-none"
      style={{ cursor: isDragging ? 'grabbing' : 'default' }}
    >
      {/* After image (full background) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <img
        src={beforeImage}
        alt={beforeLabel}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Labels */}
      <span className="absolute top-4 left-4 bg-black/60 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 bg-black/60 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded pointer-events-none">
        {afterLabel}
      </span>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      />

      {/* Draggable handle */}
      <div
        className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
        style={{
          left: `${position}%`,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <GripVertical size={18} className="text-[#0C0C0F]" />
      </div>
    </div>
  );
}
