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
      aGray: '#aaa',
      ltGray: '#7c7c7d',
      dkGray: '#363636',
      gray: {
        100: 'rgba(1,1,1,0.1)',
        500: 'rgba(1,1,1,0.5)',
        900: 'rgba(1,1,1,0.9)',
      },
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'lt': '#F05A28',
      'cen': '#EC008C',
      'rt': '#F05A28',
      'top': 'rgb(236, 0, 139)',
      'bot': 'rgb(241, 90, 34)'
    }),
    extend: {
      backgroundImage: {
        'logo': "url('https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/global/header/PS_logo.png')",
        'main-cover': "url('https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_copy_c_1058486430/image-res.img.e56494f1-7df7-4fca-81d1-8fc6c44a5e17.jpg')",
        'win-cover': "url('https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/targeted_section/targeted-parsys-default/generic_block_143764/parsys/columns/column-parsys-1/generic_block/image-res.img.8db9b947-2e00-4e45-a130-2be8c168dd77.png')",
        'growth-cover': "url('https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_1609496607/image-res.img.c281c966-a3d8-42b2-a905-715633f7b417.jpg')",
        'con-comment': "url('https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/icons/twitter-reply-black.png')",
        'con-re': "url('https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/icons/twitter-retweet-black.png')",
        'con-like': "url('https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/icons/twitter-favorite-black.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
