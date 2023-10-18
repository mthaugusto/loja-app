import Link from "next/link";
import Image from "next/image";

export default function Camisa() {
    return(
        <div>
            <h1>Camisa</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos a facilis, obcaecati dolorum esse tenetur id. Rerum, odit nesciunt dolore vel nihil sunt! Eaque, tempora? Similique corrupti nobis tenetur</p>
                <figure>
                    <Image
                        src="https://prints.ultracoloringpages.com/551ada1f48c923acddbbb135962eebb9.png"
                        alt="Camisa"
                        width={100}
                        height={100}
                    />
                </figure>
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>
    )
}