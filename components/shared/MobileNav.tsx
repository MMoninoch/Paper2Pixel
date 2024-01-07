import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"


const MobileNav = () => {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <Image src="/menu.png" alt="hamburger menu" width={20} height={15} className="m-1 mx-5"/>
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                <Link href="/" className=" flex items-center space-x-2">
                <Image src="logo.svg" width={30} height={10} alt="Paper2Pixel logo" />
                <h1 className="font-semibold text-lg subpixel-antialiased tracking-tight text-blue-600">Paper2Pixel</h1>
            </Link>
            <Separator className="border border-gray-100 " />
                <NavItems />
                </SheetContent>
            </Sheet>

        </nav>
    )
}

export default MobileNav
