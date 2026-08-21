import { createFileRoute } from '@tanstack/react-router'
import {ProductInfoOriginals} from '../../components/ui/productinfo'

export const Route = createFileRoute('/original/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const {slug} = Route.useParams();
  return <ProductInfoOriginals slug = {slug} ></ProductInfoOriginals>
}
