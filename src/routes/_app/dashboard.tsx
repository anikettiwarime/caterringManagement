import {Calendar} from '@/components/common';
import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/_app/dashboard')({
  component: Calendar,
});
