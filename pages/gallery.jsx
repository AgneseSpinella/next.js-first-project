import LayoutDefault from '../Layouts/index'
import Image from 'next/image'
import { useEffect,useState } from 'react'

const loremPicsum = [
    "https://picsum.photos/1501/400",
    "https://picsum.photos/1502/400",
    "https://picsum.photos/1500/400"
]

export default function Gallery() {
    const [images, setImages] = useState([])

useEffect(() => {
    setImages(loremPicsum)
}, [])

    return (images.map((img) => (
    <Image src={img} alt={img} width={1500} height={400}/>
    ))
    )
    }