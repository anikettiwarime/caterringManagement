import {DishManagement} from '@/pages';
import {createLazyFileRoute} from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_app/users/dish')({
  component: DishManagement,
});
