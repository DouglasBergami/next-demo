import styles from '../../styles/StaticImage.module.scss'

export default function StaticImage() {
  return (
    <div className={styles.grid}>
      <img src='/img/image-1.jpg'/>
      <img src='/img/image-2.jpg'/>
      <img src='/img/image-3.jpg'/>
      <img src='/img/image-4.jpg'/>
      <img src='/img/image-5.jpg'/>
      <img src='/img/image-6.jpg'/>
    </div>
  )
}
