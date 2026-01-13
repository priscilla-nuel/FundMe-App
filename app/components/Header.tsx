import { ConnectButton } from "@rainbow-me/rainbowkit"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"

export default function Header() {
    return (
        <header className="w-full px-4 py-3 border-b border-gray-200">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left side: Title */}
                <div className="flex items-center space-x-2">
                    <h1 className="text-xl font-bold text-gray-900">FundMe</h1>
                </div>

                {/* Right side: GitHub button and ConnectButton */}
                <div className="flex items-center space-x-4">
                    <a
                        href="https://github.com/priscilla-nuel/FundMe-App.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center"
                        aria-label="GitHub Repository"
                    >
                        <FaGithub size={20} color="#374151" />
                    </a>
                    <ConnectButton />
                </div>
            </div>
        </header>
    )
}