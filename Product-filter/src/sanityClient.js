import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '2ngnpnks',     
  dataset: 'production',     
  apiVersion: '2026-01-02', 
  useCdn: true
})