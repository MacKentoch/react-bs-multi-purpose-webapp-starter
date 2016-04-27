export const topNavBarModel = {
  brand:          'react bs starter',
  inversedStyle:  true,
  searchForm: {
    position:     'navbar-right',
    placeHolder:  'rechercher...'
  },

  leftNav:  [],

  rightNav: [
    {
      label:      'link1',
      buttonLink: '/test',
      type:       'button'
    },
    {
      label:      'dropdown1',
      type:       'dropdown',
      dropdownMenus: [
        {
          label:        'menu1',
          link:         '/',
          isDivider:    false
        },
        {
          isDivider:    true
        },
        {
          label:        'menu2',
          link:         '/',
          isDivider:    false
        }
      ]
    }
  ]
};
