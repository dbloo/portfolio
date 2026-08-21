import { createFileRoute } from '@tanstack/react-router'
import {Button} from '../components/ui/button'
import {products} from '../siteinfo/products'
import {Link} from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="">
      <section><div className="overflow-clip w-screen bg-black h-auto lg:h-120 ">
              <video className='w-screen'autoPlay loop muted playsInline src = "./assets/videos/noslee.mp4"></video>
              </div></section>
     <section className="w-screen lg:p-8 p-5  gap-4">
      <div className = "mt-10">

        



    <div className="mt-10 text-2xl lg:text-4xl font-light">
      <h1 className='mb-10'>Prints</h1>
      <div className='w-full h-auto flex lg:flex-row flex-col gap-5 lg:p-8 p-5 border border-black rounded-2xl'>


      {products.prints.map((product) => (
        <Link to={`/print/${product.slug}`}><img className = "rounded-xl w-full lg:w-100 shadow-lg"src={product.image}></img></Link>
      ))}
      </div>

      <Button>Shop all prints</Button>
      </div>

      <div className="mt-20 w-full relative  text-2xl lg:text-4xl font-light">
      <h1 className='mb-10 right-0 flex flex-row-reverse'>View my past works</h1>
      <div className='w-full h-40 border border-black rounded-2xl'></div>
      </div>
      </div>

      </section>
    </main>
  )
}
