import localFont from 'next/font/local'

export const helveticaNeue = localFont({
  src: [
    {
      path: '../assets/fonts/helvetica-neue/HelveticaNeueLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/helvetica-neue/HelveticaNeueRoman.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/helvetica-neue/HelveticaNeueMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/helvetica-neue/HelveticaNeueBold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})
