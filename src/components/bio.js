import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { bio, bioAvatar } from "./bio.module.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <div className={bio}>
      <StaticImage
        className={bioAvatar}
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/me.jpg"
        width={75}
        height={75}
        quality={95}
        alt="Me"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>
          <br />
          {author?.summary && <small>{author.summary}</small>}
        </p>
      )}
    </div>
  )
}

export default Bio
