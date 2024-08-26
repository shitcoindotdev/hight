import Image from 'next/image'
import { Kanit } from 'next/font/google'
import ContractAddress from '@/components/ContractAddress'
import LinkWithIcon from '@/components/LinkWithIcon'
import Button from '@/components/Button'
import { useState } from 'react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import VantaBackground from '@/components/VantaBackground'
import Link from 'next/link'

const roboto = Kanit({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const socialsObjects = {
  twitter: {
    href: 'https://x.com/TronHighT',
    icon: '/x.svg',
  },
  telegram: {
    href: 'https://t.me/TronHighT',
    icon: '/tg.svg',
  },
  // dexScreener: {
  //   href: 'https://dexscreener.com/',
  //   icon: '/dexs.svg',
  // },
  dexTools: {
    href: 'https://www.dextools.io/',
    icon: '/dext.svg',
  },
}

const shitcoin = {
  ticker: '$T',
  ca: '0x000000000000000000000000000000000000dEaD',
  scan: 'https://etherscan.io/address/0x000000000000000000000000000000000000dEaD',
  mainImg: '/',
  socials: [
    socialsObjects.twitter,
    socialsObjects.telegram,
    socialsObjects.dexTools,
  ],
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  function scrollToElement(element: string) {
    const el = document.getElementById(element)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function closeMenu() {
    setMenuOpen(false)
  }
  return (
    <main
      id="home"
      className={`flex min-h-screen w-full flex-col overflow-hidden bg-neutral-900  text-neutral-200   items-center ${roboto.className}`}
      // style={{
      //   backgroundImage: 'url("/random.image")',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      {/* <Image
        src={shitcoin.mainImg}
        alt="meme image"
        width={400}
        height={400}
        className="w-[420px] fadeIn container-shadow border border-white  max-w-[80%] h-auto rounded-xl opacity-0"
        style={{ animationDelay: '500ms' }}
      /> */}

      {/* <ParticleBackground /> */}

      <VantaBackground />
      <div
        className="fixed top-4 z-50 fade-in-top right-4 md:hidden"
        onClick={toggleMenu}
      >
        {!menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        )}
      </div>
      <ul
        style={{
          backgroundImage: 'url("/zyzz.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={`gap-4 w-full min-h-dvh top-0 left-0 items-center justify-center text-[32px] text-neutral-200 fixed md:hidden flex flex-col bg-neutral-900 transition duration-300 ease-in-out tracking-tight z-40 opacity-0 mobile-menu ${menuOpen ? 'open' : ''}`}
      >
        <li
          onClick={() => {
            closeMenu()
            scrollToElement('home')
          }}
        >
          <a href="#home">HOME</a>
        </li>

        <li
          onClick={() => {
            closeMenu()
            scrollToElement('tokenomics')
          }}
        >
          <a href="#tokenomics">TOKENOMICS</a>
        </li>
        <li
          onClick={() => {
            closeMenu()
            scrollToElement('contact')
          }}
        >
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <Button
            style={{ animationDelay: '666ms' }}
            className="rounded-md  bg-red-700 hover:bg-red-600  transition duration-300 ease-in-out px-4 py-1 text-neutral-200 "
          >
            Buy {shitcoin.ticker}{' '}
          </Button>
        </li>
      </ul>
      <section className="flex w-full  relative min-h-dvh  z-20 items-center flex-col">
        <div className="absolute pointer-events-none w-full h-full bg-neutral-900/50 z-10"></div>
        <Image
          style={{ animationDelay: '500ms' }}
          className="absolute fadeIn top-14  z-0 opacity-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[900px]"
          src={'/angelzyzz.png'}
          height={400}
          width={500}
          alt="giga"
        />
        <Image
          className="absolute bottom-0 z-[8] fade-in-left w-[60%] opacity-0  max-w-[700px]"
          style={{ animationDelay: '600ms' }}
          src={'/don.png'}
          height={400}
          width={500}
          alt="giga"
        />
        <Image
          className="absolute bottom-0 z-[0] fade-in-right w-[40%] opacity-0 right-0 max-w-[420px]"
          style={{ animationDelay: '650ms' }}
          src={'/rocky.png'}
          height={400}
          width={500}
          alt="giga"
        />
        <Image
          className="absolute bottom-0 fade-in-left z-0 opacity-0 left-0 w-[60%] md:w-[70%] max-w-[700px]"
          style={{ animationDelay: '700ms' }}
          src={'/giga.webp'}
          height={400}
          width={500}
          alt="giga"
        />
        <Image
          className="absolute bottom-0  z-[1] fade-in-right opacity-0 right-0 w-[60%] md:w-[70%] max-w-[700px]"
          style={{ animationDelay: '700ms' }}
          src={'/homelander.png'}
          height={400}
          width={500}
          alt="giga"
        />
        <nav className="flex w-full relative z-10 pt-4 fade-in-top opacity-0 px-8 max-w-[1200px] justify-between items-center">
          <a href="#" className="text-xl font-semibold">
            $T
          </a>
          <ul className="gap-4 hidden md:flex tracking-tight ">
            <li
              className="hover:text-red-700 transition duration-300 ease-in-out"
              onClick={() => {
                scrollToElement('home')
              }}
            >
              <a href="#">HOME</a>
            </li>

            <li
              className="hover:text-red-700 transition duration-300 ease-in-out"
              onClick={() => {
                scrollToElement('tokenomics')
              }}
            >
              <a href="#">TOKENOMICS</a>
            </li>
            <li
              className="hover:text-red-700 transition duration-300 ease-in-out"
              onClick={() => {
                scrollToElement('contact')
              }}
            >
              <a href="#">CONTACT</a>
            </li>
          </ul>
          <div className="hidden md:flex items-center justify-center gap-4">
            <LinkWithIcon
              href={socialsObjects.telegram.href}
              className="h-auto transition-all overflow-hidden duration-150 ease-in-out rounded-md max-w-10"
              icon={socialsObjects.telegram.icon}
            />
            <LinkWithIcon
              href={socialsObjects.twitter.href}
              className="h-auto transition-all    overflow-hidden duration-150 ease-in-out rounded-md max-w-10"
              icon={socialsObjects.twitter.icon}
            />
          </div>
        </nav>

        <h1 className="flex items-center relative z-10 gap-2 md:gap-8 justify-center w-full">
          <span className="text-neutral-200 font-semibold opacity-0 fade-in-left text-[48px] md:text-[128px]">
            HIGH
          </span>
          <span className="text-red-700 font-semibold opacity-0 fade-in-right text-[48px] md:text-[128px]">
            $T
          </span>
        </h1>
        <div className="flex flex-col md:flex-row-reverse  mt-16 items-center gap-4 justify-between max-w-[1200px] px-8 w-full">
          <div className="relative flex justify-center w-fit z-10">
            <Image
              className="rounded-lg opacity-0 fadeIn w-[500px] max-w-[80%]"
              src={'/shelby.gif'}
              style={{ animationDelay: '1500ms' }}
              height={400}
              width={400}
              alt="shelby"
            />
          </div>
          <div
            style={{ animationDelay: '1500ms' }}
            className="max-w-[340px] relative z-10 text-white opacity-0 shadow-sm flex fadeIn flex-col items-start"
          >
            <p className="text-neutral-200 md:text-[42px] md:leading-[42px] font-semibold mb-2">
              Raise Your <span className="text-red-700">Test</span> Back To
              Primal Levels
            </p>
            <p className="mb-1">
              <span className="text-red-700">$T</span> is a memecoin on Solana
              made by High Testosterone individuals, for High T individuals.
            </p>
            <p>
              Together we will raise our T-levels and show the World again what
              true excellence looks like
            </p>
            <Button className="bg-neutral-200 container-shadow text-[16px] md:text-[18px] px-4 md:py-1 rounded-lg text-neutral-900 mt-4">
              Buy $T
            </Button>
            <ContractAddress
              className="container-shadow rounded-lg  bg-red-800 hover:bg-white/80 transition duration-300 ease-in-out px-4 py-1 text-black opacity-100"
              contractAddress={shitcoin.ca}
              style={{ animationDelay: '666ms' }}
            />
          </div>
        </div>
        <div className="section-divider"></div>
      </section>

      <section
        style={{
          backgroundImage: "url('/bateman.gif')",
          backgroundSize: 'cover',
        }}
        className="relative pb-10 gap-8 bg-center flex flex-col items-center justify-center w-full min-h-screen"
      >
        <AnimateOnScroll>
          <h3 className="lines  before:bg-neutral-400 md:text-[68px] text-neutral-200 font-semibold pt-4 text-[48px] text-nowrap after:bg-neutral-400">
            How To&nbsp;<span className="text-red-700">Buy</span>
          </h3>
        </AnimateOnScroll>
        <div className="text-neutral-900 px-8 flex md:flex-row flex-col gap-8 justify-center items-center w-full">
          <AnimateOnScroll>
            <div className="bg-neutral-200/90  backdrop-blur-sm h-[180px] flex items-center flex-col justify-center max-w-[80%] w-[420px] overflow-hidden relative text-center p-4 rounded-lg">
              <span className="absolute rounded-br-lg top-0 left-0 w-10 h-10 text-center leading-relaxed flex justify-center bg-red-800 text-neutral-200">
                <p className=" w-fit leading-9">1</p>
              </span>
              <p className="font-semibold text-[28px] text-red-800">Get $TRX</p>
              <p>
                Make sure you have some TRON - $TRX.
                <br /> You can receive it by buying it on an exchange like
                Binance or Coinbase
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-neutral-200/90 backdrop-blur-sm h-[180px] flex items-center flex-col justify-center max-w-[80%]  w-[420px] overflow-hidden relative text-center p-4 rounded-lg">
              <span className="absolute rounded-br-lg top-0 left-0 w-10 h-10 text-center leading-relaxed flex justify-center  bg-red-800 text-neutral-200">
                <p className=" w-fit leading-9">2</p>
              </span>
              <p className="font-semibold text-[28px] text-red-800">
                Go to SunSwap
              </p>
              <p>
                Go to SunSwap and connect your wallet
                <br /> (TronLink, MathWallet, etc.)
              </p>
            </div>
          </AnimateOnScroll>
        </div>
        <div className="text-neutral-900 px-8 md:flex-row flex-col flex gap-8 justify-center items-center w-full">
          <AnimateOnScroll>
            <div className="bg-neutral-200/90  backdrop-blur-sm  h-[180px] flex items-center flex-col justify-center max-w-[80%] w-[420px] overflow-hidden relative text-center p-4 rounded-lg">
              <span className="absolute rounded-br-lg top-0 left-0 w-10 h-10 text-center leading-relaxed flex justify-center bg-red-800 text-neutral-200">
                <p className=" w-fit leading-9">3</p>
              </span>
              <p className="font-semibold text-[28px] text-red-800">
                SWAP $TRX FOR $T
              </p>
              <p>
                Swap your $TRX for $T
                <br /> on SunSwap
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-neutral-200/90  backdrop-blur-sm h-[180px] flex items-center flex-col justify-center max-w-[80%] w-[420px] overflow-hidden relative text-center p-4 rounded-lg">
              <span className="absolute rounded-br-lg top-0 left-0 w-10 h-10 text-center leading-relaxed flex justify-center bg-red-800 text-red-800 text-neutral-200">
                <p className=" w-fit leading-9">4</p>
              </span>
              <p className="font-semibold text-[28px] text-red-800">
                INCREASE YOUR T
              </p>
              <p>The more $T you own the higher your testosterone goes</p>
            </div>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll>
          <h4
            id="tokenomics"
            className="lines before:bg-neutral-400 text-[48px] md:text-[68px] text-neutral-200 font-semibold pt-4 after:bg-neutral-400"
          >
            Tokenomics
          </h4>
        </AnimateOnScroll>

        <AnimateOnScroll>
          {' '}
          <div className="pb-8 w-full flex items-center justify-center">
            <ul className="font-bold text-[32px]">
              <li className="flex gap-2 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                0% TAX
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-flame"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                </span>
                LP BURNED
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-hand-coins"
                  >
                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                    <path d="m2 16 6 6" />
                    <circle cx="16" cy="9" r="2.9" />
                    <circle cx="6" cy="5" r="3" />
                  </svg>
                </span>
                1B SUPPLY
              </li>
            </ul>
          </div>
        </AnimateOnScroll>
        <div className="bottomTriangle">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section className="flex flex-col gap-4 bg-red-800 w-full py-4">
        <AnimateOnScroll>
          <h1
            id="contact"
            className=" text-[28px] text-center text-nowrap md:text-[68px] text-neutral-200 font-semibold pt-4 "
          >
            Raise Your $T
          </h1>
        </AnimateOnScroll>
        <div className="flex flex-col justify-center items-center gap-4">
          <AnimateOnScroll>
            <div className="flex gap-4 items-center justify-center">
              <LinkWithIcon
                href={socialsObjects.telegram.href}
                className="h-auto transition-all overflow-hidden duration-150 ease-in-out rounded-md max-w-16"
                icon={socialsObjects.telegram.icon}
              />
              <LinkWithIcon
                href={socialsObjects.twitter.href}
                className="h-auto transition-all overflow-hidden duration-150 ease-in-out rounded-md max-w-16"
                icon={socialsObjects.twitter.icon}
              />
              <LinkWithIcon
                href={socialsObjects.dexTools.href}
                className="h-auto transition-all overflow-hidden duration-150 ease-in-out rounded-md max-w-16"
                icon={socialsObjects.dexTools.icon}
              />
            </div>
          </AnimateOnScroll>
          <span>contact@hightest.com</span>
          <span className="text-sm md:text-md">
            &copy; HIGH<span className="text-red-700">T</span> 2024{' '}
            <span className="px-1">|</span> ALL RIGHTS ARE NOT RESERVED.
          </span>
        </div>
      </section>
    </main>
  )
}
