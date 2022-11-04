/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const AcademyLogo = () =>{
    return(
      <Link href="/">
      <a>
        <img
          src="/assets/academy/icons/logo_academy.png"
          className="w-32"
          alt="Logo Beings Academy"
        />
      </a>
      </Link>
   
    )
}

export default AcademyLogo;