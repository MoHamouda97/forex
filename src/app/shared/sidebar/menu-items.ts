import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'العملات',
    icon: 'fas fa-dollar-sign',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/currancies/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/currancies/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'الاخبار',
    icon: 'fas fa-newspaper',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/news/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/news/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'الارباح',
    icon: 'far fa-money-bill-alt',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/profits/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/profits/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'سلايدر',
    icon: 'fas fa-images',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/slider/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/slider/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'الاشتراكات',
    icon: 'fas fa-calendar-alt',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/sub/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/sub/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'تداول',
    icon: 'fas fa-chart-area',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/trade/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/trad/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'الاعضاء',
    icon: 'fas fa-users',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/users/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/users/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'تواصل',
    icon: 'fas fa-envelope',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/contact/all',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/contact/add',
        title: 'اضافة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },   
];
