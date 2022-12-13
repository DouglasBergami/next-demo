import styles from '../../../styles/Home.module.css'

import { useRouter } from 'next/router'

export default function SaveData() {
  const router = useRouter()
  const {all} = router.query

  return (
    <p className={styles.description}>the query param provided is {JSON.stringify(all)}
      <code className={styles.code}>pages/dynamicRouteSegments/saveData/*</code>
    </p>
  )
}
