import styles from '../../../styles/Home.module.css'

import { useRouter } from 'next/router'

export default function Blog() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <p className={styles.description}>the query param provided is {slug}
       <code className={styles.code}>pages/dynamicRouteSegments/blog/:slug</code>
    </p>
  )
}
