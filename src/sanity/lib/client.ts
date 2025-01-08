import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:'o5t7im9q',
  dataset:'production',
  apiVersion:"v2025-01-07",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
