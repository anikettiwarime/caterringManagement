import Staff from '@/pages/Staff'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/users/staff')({
  component: Staff
})