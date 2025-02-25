export const navigationItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Products & Services',
    href: '/products',
    children: [
      { label: 'Custom Extrusion', href: '/products/custom-extrusion' },
      { label: 'Custom Molding', href: '/products/custom-molding' },
      { label: 'Die Cutting', href: '/products/die-cutting' },
      { label: 'Secondary Fabrication', href: '/products/secondary-fabrication' },
      { label: 'Custom Mixing', href: '/products/custom-mixing' },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Catalogue',
    href: '/catalogue',
  },
  {
    label: 'Gallery',
    href: '/gallery',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
];
