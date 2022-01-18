import LayoutDefault from '../Layouts/index'
import Image from 'next/image'

export default function Gallery() {
    return (
        <LayoutDefault>
            <h3>Questa è la gallery</h3>
            <Image src="https://picsum.photos/1500/400" alt="pic" width={1500} height={400}/>
        </LayoutDefault>
    )
}

