const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'fk3atfuj',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client