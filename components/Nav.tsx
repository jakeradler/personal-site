import Link from 'next/link'

const Nav: React.FunctionComponent = () => {
  return (
    <nav className="flex items-center justify-end text-md py-4 mb-6 md:mb-0">
      <Link href="/">
        <a className="pr-3 md:pr-6 md:text-lg hover:text-gray-300">Home</a>
      </Link>
      <Link href="/about">
        <a className="pr-3 md:pr-6 md:text-lg hover:text-gray-300">About</a>
      </Link>
      <a
        className="pr-3 md:pr-6 md:text-lg hover:text-gray-300"
        href="https://github.com/jrjradler"
        target="_blank"
      >
        GitHub
      </a>
      <a
        className="pr-3 md:pr-6 md:text-lg hover:text-gray-300"
        href="https://www.linkedin.com/in/jakeradler"
        target="_blank"
      >
        LinkedIn
      </a>
    </nav>
  )
}

export default Nav
