module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url(images/desktop/image-header.jpg)",
        'berry': "url(images/desktop/image-graphic-design.jpg)",
        'orange': "url(images/desktop/image-photography.jpg)",

      },
      fontFamily: {
        myfont: ['Barlow'],
        femi: ['Fraunces']
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
