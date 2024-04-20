import gsap from 'gsap';
const tl = gsap.timeline({ defaults: { duration: 1 } });

export function animateText(textRef) {
  tl.to(textRef, {
    text: {
      value: 'Actualité',
      newClass: 'text-primary-accent',
    },
  })
    .to(textRef, {
      text: {
        value: 'économie',
        newClass: 'text-primary-accent',
      },
    })
    .to(textRef, {
      text: {
        value: 'culture',
        newClass: 'text-primary-accent',
      },
    })
    .to(textRef, {
      text: {
        value: 'science',
        newClass: 'text-primary-accent',
      },
    })
    .to(textRef, {
      text: {
        value: 'sport',
        newClass: 'text-primary-accent',
      },
    })
    .to(textRef, {
      text: {
        value: 'technologies',
        newClass: 'text-primary-accent',
      },
    })
    .to(textRef, {
      opacity: 0,
    });
}

export function animateBackDrops(refBackDrop_1, refBackDrop_2, refContainer) {
  tl.to(refBackDrop_1, {
    '--clip-circle': '100%',
    ease: 'power4.Out',
  })
    .to(
      refBackDrop_2,
      {
        '--clip-circle': '100%',
        ease: 'power4.Out',
      },
      '-=50%'
    )
    .to(refBackDrop_1, {
      opacity: 0,
      ease: 'power4.Out',
    })
    .to(
      refContainer,
      {
        opacity: 0,
        ease: 'power4.Out',
      },
      '<'
    )
    .to(refBackDrop_2, {
      opacity: 0,
      ease: 'power1.inOut',
    })
    .to(
      refContainer,
      {
        y: '-120%',
        duration: 0.2,
      },
      '<'
    );
}
