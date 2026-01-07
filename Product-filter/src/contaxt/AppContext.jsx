import React, { useEffect } from 'react'
import { sanityClient } from '../sanityClient'

const AppContext = ({children}) => {
 useEffect(() => {
    const query = `
      *[_type == "theme"][0]{
        "primaryColor": primaryColor.hex
      }
    `

    sanityClient
        .fetch(query)
        .then(data => {
            if (data?.primaryColor) {
            document.documentElement.style.setProperty(
                "--primary-color",
                data.primaryColor
            )
            }
        })
        .catch(console.error)
    }, [])

  return (
  <>
    {children}
  </>
)
}

export default AppContext