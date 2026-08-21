import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/prints')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/prints"!</div>
}
