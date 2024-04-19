import gsap from 'gsap';

export function animateOverlay(showSearch, overlayRef) {
  if (showSearch) {
    gsap.to(overlayRef.current, {
      duration: 1,
      '--clip': '100% 0%, 0% 0%, 0% 125%, 100% 100%',
      ease: 'power4.Out',
    });
  } else {
    gsap.to(overlayRef.current, {
      duration: 1,
      '--clip': '0% 0%, 0% 0%, 0% 100%, 0% 100%',
      ease: 'power4.Out',
    });
  }
}
