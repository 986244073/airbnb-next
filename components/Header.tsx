import {
    Bars3Icon,
    GlobeAltIcon,
    MagnifyingGlassIcon,
    UserCircleIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'

const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3  bg-white p-5 shadow-md md:px-10">
            <div
                className="relative my-auto flex h-10
            cursor-pointer items-center"
            >
                <Image
                    alt="logo"
                    height={300}
                    src={'https://links.papareact.com/qd3'}
                    width={150}
                />
            </div>

            <div
                className="flex items-center rounded-full
            py-2 md:border-2 md:shadow-sm"
            >
                <input
                    className="grow bg-transparent pl-5
                    text-sm text-gray-500
                    outline-none placeholder:text-gray-400"
                    placeholder="点击搜索"
                    type={'text'}
                />
                <MagnifyingGlassIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2  text-white md:mx-2 md:inline-flex" />
            </div>
            <div
                className="flex items-center justify-end space-x-4
            text-gray-500"
            >
                <p className="hidden cursor-pointer md:inline">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div
                    className="flex items-center space-x-2 rounded-full
                border-2 p-2"
                >
                    <Bars3Icon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </header>
    )
}

export default Header
