import Lenis from "@studio-freight/lenis";

let LenisManager: Lenis | null = null;

function rAF(time: number) {
	LenisManager?.raf(time);

	requestAnimationFrame(rAF);
}

if (typeof window !== "undefined") {
	LenisManager = new Lenis({
		orientation: "vertical",
		duration: 1.2,
		easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
		gestureOrientation: "vertical",
		wheelMultiplier: 0.7,
		smoothWheel: true,
		smoothTouch: false,
		touchMultiplier: 2
	});

	requestAnimationFrame(rAF);
}

export default LenisManager;
