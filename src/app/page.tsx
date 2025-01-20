import { getCurrentSession } from "@/actions/auth"
import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner"
import ProductGrid from "@/components/product/ProductGrid"
import { getAllProductrs } from "@/sanity/lib/client"


const Home = async() => {
  const {user} = await getCurrentSession()
  const products = await getAllProductrs()
  return (
    <div>
     <SalesCampaignBanner />
     <section className="container  mx-auto py-8">
      <ProductGrid products={products} />
     </section>
    </div>
  )
}

export default Home
