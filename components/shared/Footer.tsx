import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="wrapper border-t">
        <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
            <Link href="/" className="w-36 flex items-center space-x-2 ml-3">
            <Image src="logo.svg" width={30} height={10} alt="Paper2Pixel logo" />
                <h1 className="font-semibold text-lg subpixel-antialiased tracking-tight text-blue-600">Paper2Pixel</h1>
            </Link>

            <p>2024 Paper2Pixel. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
