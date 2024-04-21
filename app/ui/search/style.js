import { cva } from 'class-variance-authority';

export const search = cva([''], {
  variants: {
    intent: {
      animated: [
        'px-4 md:px-10 lg:px-14 overlay  absolute -bottom-16 left-0 z-50 w-full  my-3',
      ],
      static: [' w-full '],
    },
  },
});
