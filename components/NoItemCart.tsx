import Image from "next/image"
import Link from "next/link"

export default function NoItemCart() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row flex-1 items-center justify-between ">
        <Image src={'/images/sacola-natura.jpg'} alt="" width={350} height={350} data-testid="sacola-natura" />
        <p className="font-medium text-lg w-auto">
          Ei ei, sua sacola está vazia, você não viu que o {' '}
            <b>
              <Link href={'/detailsProduct/12'}>
              Natura Homem Emocion.e {' '}
              </Link>
            </b> 
          está no precinho? Corre lá!
        </p>
      </div>
    </div>
  )
}