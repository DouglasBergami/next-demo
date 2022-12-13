import styles from '../../../../styles/Home.module.css'

import { useRouter } from 'next/router'

export default function Profile() {
  const router = useRouter()
  const { username } = router.query

  return (
    <p className={styles.description}>the query param provided is {username}
      <code className={styles.code}>pages/dynamicRouteSegments/user/:username/profile</code>
    </p>
  )
}
