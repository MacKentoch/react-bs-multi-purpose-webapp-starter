export const topNavBarModel = {
  brand:          'React Redux Bootstrap Starter',
  inversedStyle:  true,
  searchForm: {
    position:     'navbar-right',
    placeHolder:  'rechercher...'
  },

  leftNav:  [],

  rightNav: [
    {
      label:      'link1',
      buttonLink: '/',
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
