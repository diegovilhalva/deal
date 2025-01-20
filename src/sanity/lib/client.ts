import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import { sanityFetch } from './live'
import { Product } from '@/sanity.types'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


export const getAllProductrs = async () => {

  const query = `*[_type == "product"]`
  const products = await sanityFetch({query:query})
  return products.data as Product[]
}

