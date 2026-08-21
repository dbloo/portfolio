import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/originals')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/originals"!</div>
}
