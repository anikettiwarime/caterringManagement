import Client from '@/pages/Client';
import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/_app/users/client')({
  component: Client,
});
