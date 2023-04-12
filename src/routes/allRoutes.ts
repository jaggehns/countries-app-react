import CardView from '../pages/CardView/CardView';
import Example from '../pages/example/Example';

export interface IRoute {
  path: string;
  name: string;
  component: any;
  props?: any;
}

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'CardView',
    component: CardView,
  },
];
