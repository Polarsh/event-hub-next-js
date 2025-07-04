import {
  CalendarIcon,
  ChartPieIcon,
  CogIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

class AdminRoutes {
  static SIDEBAR_ROUTES = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: HomeIcon,
    },
    {
      name: 'Gestión de usuarios',
      icon: UsersIcon,
      children: [
        { name: 'Clientes', href: '/admin/users/clients' },
        {
          name: 'Organizadores',
          href: '/admin/users/organizers',
        },
        {
          name: 'Administradores',
          href: '/admin/users/administrators',
        },
      ],
    },
    {
      name: 'Gestión de eventos',
      icon: CalendarIcon,
      children: [
        { name: 'Eventos activos', href: '/admin/events/active' },
        {
          name: 'Eventos pendientes',
          href: '/admin/events/pending',
        },
        { name: 'Eventos pasados', href: '/admin/events/past' },
        {
          name: 'Eventos destacados',
          href: '/admin/events/featured',
        },
      ],
    },
    {
      name: 'Métricas y reportes',
      icon: ChartPieIcon,
      children: [
        { name: 'Visitas', href: '/admin/metrics/visits' },
        { name: 'Eventos creados', href: '/admin/metrics/created-events' },
        { name: 'Usuarios activos', href: '/admin/metrics/active-users' },
      ],
    },
    {
      name: 'Soporte y moderación',
      icon: DocumentDuplicateIcon,
      children: [
        { name: 'Tickets de soporte', href: '/admin/support/tickets' },
        { name: 'Reportes', href: '/admin/support/reports' },
      ],
    },
    {
      name: 'Configuración',
      icon: CogIcon,
      children: [
        { name: 'Configuración general', href: '/admin/settings/general' },
        { name: 'Permisos y roles', href: '/admin/settings/permissions' },
        { name: 'Integraciones', href: '/admin/settings/integrations' },
      ],
    },
  ]

  static NAVBAR_ROUTES = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ]

  static SETTINGS_ROUTE = '/admin/profile/settings'
}

export default AdminRoutes
