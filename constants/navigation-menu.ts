import {
  Book,
  Briefcase,
  Home,
  Layers,
  Tag,
  User,
  Users,
} from 'lucide-vue-next';
import type { Component } from 'vue';

export interface INavigationMenu {
  name: string;
  path: string;
  icon?: Component;
}

export const navigationMenu: INavigationMenu[] = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Service', path: '/service', icon: Layers },
  { name: 'Order', path: '/order', icon: Book },
  { name: 'Customer', path: '/customer', icon: Users },
  { name: 'Customer Identity', path: '/customer-identity', icon: Briefcase },
  { name: 'Promo Code', path: '/promo-code', icon: Tag },
  { name: 'Admin User', path: '/admin-user', icon: User },
];
