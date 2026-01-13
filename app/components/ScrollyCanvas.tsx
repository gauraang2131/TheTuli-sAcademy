"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const FRAME_COUNT = 75;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // 1. Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const indexStr = i.toString().padStart(2, "0");
            img.src = `/sequence/frame_${indexStr}.webp`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };

            img.onerror = () => {
                console.error(`Failed to load frame ${i}`);
                loadedCount++;
            };

            loadedImages.push(img);
        }
    }, []);

    // 2. Render canvas
    useEffect(() => {
        const render = (rawIndex: number) => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            if (!canvas || !ctx || images.length === 0) return;

            // Safe index clamping
            const index = Math.min(
                FRAME_COUNT - 1,
                Math.max(0, Math.floor(rawIndex))
            );

            const img = images[index];

            // Guard against broken/loading images
            if (!img || !img.complete || img.naturalWidth === 0) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const wRatio = canvas.width / img.width;
            const hRatio = canvas.height / img.height;
            const ratio = Math.max(wRatio, hRatio);

            const centerShiftX = (canvas.width - img.width * ratio) / 2;
            const centerShiftY = (canvas.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShiftX,
                centerShiftY,
                img.width * ratio,
                img.height * ratio
            );
        };

        if (isLoaded) render(0);

        const unsubscribe = frameIndex.on("change", render);

        return () => unsubscribe();
    }, [frameIndex, isLoaded, images]);

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        Loading Application...
                    </div>
                )}
                <canvas ref={canvasRef} className="block w-full h-full" />
            </div>
        </div>
    );
}