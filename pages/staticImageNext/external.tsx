import styles from '../../styles/StaticImage.module.scss'
import Image from 'next/legacy/image'

export default function StaticImageNextExternal() {
  return (
    <div className={styles.grid}>
      <Image src='https://images.freeimages.com/images/large-previews/9a6/white-and-purple-crocuses-blooming-in-the-spring-1641916.jpg' alt='image-1' width={1600} height={900}/>
      <Image src='https://images.freeimages.com/images/large-previews/6d0/road-trip-2-1641710.jpg' alt='image-2' width={1600} height={900}/>
      <Image src='https://images.freeimages.com/images/large-previews/050/pizza-1319555.jpg' alt='image-3' width={1600} height={900}/>
      <Image src='https://images.freeimages.com/images/large-previews/e1b/com-1290330.jpg' alt='image-4' width={1600} height={900}/>
      <Image src='https://images.freeimages.com/images/large-previews/3f2/cat-mother-protecting-its-baby-1641748.jpg' alt='image-5' width={1600} height={900}/>
      <Image src='https://images.freeimages.com/images/large-previews/c4f/making-haya-while-it-can-1641953.jpg' alt='image-6' width={1600} height={900}/>
    </div>
  )
}
