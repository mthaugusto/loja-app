import Link from "next/link";
import Image from "next/image";

export default function Tenis() {
    return(
        <div>
            <h1>Tênis</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos a facilis, obcaecati dolorum esse tenetur id. Rerum, odit nesciunt dolore vel nihil sunt! Eaque, tempora? Similique corrupti nobis tenetur</p>
                <figure>
                    <Image
                        src="https://prints.ultracoloringpages.com/16ce8e0e49a33d618437454b456f7319.png"
                        alt="Tênis"
                        width={100}
                        height={100}
                    />
                </figure>
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>
    )
}