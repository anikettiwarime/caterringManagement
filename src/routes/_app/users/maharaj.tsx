import Maharaj from '@/pages/Maharaj';
import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/_app/users/maharaj')({
  component: Maharaj,
});
