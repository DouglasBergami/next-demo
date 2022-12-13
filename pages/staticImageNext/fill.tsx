import styles from '../../styles/StaticImageFill.module.scss'
import Image from 'next/image'

export default function StaticImageNextFill() {
  return (
    <div className={styles.grid}>
      <Image src='/img/image-1.jpg' alt='image-1' fill/>
      <Image src='/img/image-2.jpg' alt='image-2' fill/>
      <Image src='/img/image-3.jpg' alt='image-3' fill/>
      <Image src='/img/image-4.jpg' alt='image-4' fill/>
      <Image src='/img/image-5.jpg' alt='image-5' fill/>
      <Image src='/img/image-6.jpg' alt='image-6' fill/>
    </div>
  )
}
