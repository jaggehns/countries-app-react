import CountryView from '../pages/CountryView/CountryView';
import MainView from '../pages/MainView/MainView';

export interface IRoute {
  path: string;
  name: string;
  component: any;
  props?: any;
}

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'MainView',
    component: MainView,
  },
  {
    path: '/:country',
    name: 'CountryView',
    component: CountryView,
  },
];
