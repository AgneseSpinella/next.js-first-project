import LayoutDefault from '../Layouts/index'
import Image from 'next/image'
import { useEffect,useState } from 'react'

const loremPicsum = [
    "https://picsum.photos/1500/130",
    "https://picsum.photos/1501/130",
    "https://picsum.photos/1502/130"
]

export default function Gallery() {
    const [images, setImages] = useState([])

useEffect(() => {
    setImages(loremPicsum)
}, [])

    return (
    <LayoutDefault>
    {images.map((img) => (
    <Image src={img} alt={img} width={1500} height={130}/>
    ))}
    </LayoutDefault>
    )}