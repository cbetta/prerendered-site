import React, { useState, useEffect } from "react"

const IndexPage = () => {
  const [pages, setPages] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/box/developer.box.com/contents/guides?ref=en')
      .then(response => response.json())
      .then(data => setPages(data))
  }, [])

  return  (
    <>
      <h1>Pages</h1>
      { pages[0] && (
        <ul>
          { pages.map((page, index) => (
            <li key={index}>{ page.name }</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default IndexPage
