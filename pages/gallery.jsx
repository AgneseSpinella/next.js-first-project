import LayoutDefault from '../Layouts/index'
import Image from 'next/image'

export default function Gallery() {
    return (
        <LayoutDefault>
            <h3>Questa è la gallery</h3>
            <Image src="https://picsum.photos/200/300" alt="pic" layour="fill"/>
        </LayoutDefault>
    )
}

