import { createFileRoute } from '@tanstack/react-router'
import {ProductInfoPrints} from '../../components/ui/productinfo'
import {ProductInfoOriginals} from '../../components/ui/productinfo'
export const Route = createFileRoute('/print/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const {slug} = Route.useParams();

  return  <ProductInfoPrints slug = {slug}></ProductInfoPrints> 
}
