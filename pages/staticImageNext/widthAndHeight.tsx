import styles from '../../styles/StaticImage.module.scss'
import Image from 'next/legacy/image'

export default function StaticImageNextWidthAndHeight() {
  return (
    <div className={styles.grid}>
      <Image src='/img/image-1.jpg' alt='image-1' width={1600} height={900}/>
      <Image src='/img/image-2.jpg' alt='image-2' width={1600} height={900}/>
      <Image src='/img/image-3.jpg' alt='image-3' width={1600} height={900}/>
      <Image src='/img/image-4.jpg' alt='image-4' width={1600} height={900}/>
      <Image src='/img/image-5.jpg' alt='image-5' width={1600} height={900}/>
      <Image src='/img/image-6.jpg' alt='image-6' width={1600} height={900}/>
    </div>
  )
}
