import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <div>
      <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-36 flex items-center space-x-2 ml-3">
                <Image src="logo.svg" width={30} height={10} alt="Paper2Pixel logo" />
                <h1 className="font-semibold text-lg subpixel-antialiased tracking-tight text-blue-600">Paper2Pixel</h1>
            </Link>

            <SignedIn>
                <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItems/>
                </nav>
            </SignedIn>

            <div className="flex justify-end">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                    <MobileNav />
                </SignedIn>
                <SignedOut>
                    <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-900" size="lg">
                        <Link href='/sign-in'>Login</Link>
                    </Button>
                </SignedOut>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
