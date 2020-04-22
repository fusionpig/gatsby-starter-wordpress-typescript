import * as React from 'react';
import { Link, graphql } from 'gatsby'
import {RouteComponentProps} from "@reach/router"
import {
  SinglePageQuery
} from '../../types/graphql-types'
import Layout from '../layouts/index'

type Props = RouteComponentProps & {
  data: SinglePageQuery
}
const Component: React.FC<Props> = (props) => {
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{__html: props.data.wordpressPage.title}} />
      <section dangerouslySetInnerHTML={{__html: props.data.wordpressPage.content}} />
      <Link to='/'>Home</Link>
    </Layout>
  )
}
export default Component

export const pageQuery = graphql`
  query SinglePage($slug: String) {
    wordpressPage(slug: { eq: $slug }) {
      id
      slug
      title
      content
    }
  }
`