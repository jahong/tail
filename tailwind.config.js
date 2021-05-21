module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        maxWidth: {
            'xl': '1400px'
        },
      },
    },
    colors: {
      trans: 'transparent',
      prm: '#e40084',
      prmOp: {
        300: 'rgba(228,0,132.0.3)',
        500: 'rgba(228,0,132.0.5)',
        900: 'rgba(228,0,132.0.9)',
      },
      wh: 'var(--color-wh)',
      bl: 'var(--color-bl)',
      dark: 'var(--color-dark)',
      darkLt: 'var(--color-darkLt)',
      darkDp: 'var(--color-darkDp)',
      yellow: '#ffba0e',
      gray: {
        500: 'rgba(1,1,1,0.5)'
      },
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'lt': '#F05A28',
      'cen': '#EC008C',
      'rt': '#F05A28',
    }),
    extend: {
      backgroundImage: {
        'logo': "url('https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/global/header/PS_logo.png')",
        'main-cover': "url('https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_copy_c_1058486430/image-res.img.e56494f1-7df7-4fca-81d1-8fc6c44a5e17.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
