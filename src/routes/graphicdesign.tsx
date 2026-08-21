import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/graphicdesign')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/graphicdesign"!</div>
}
