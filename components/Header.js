import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <>
      <ThemeSwitcher />
      <header className="mt-12">
        <p className="text-2xl dark:text-white text-center">
          <Link legacyBehavior href="/">
            <a className="hover:text-primary">
              <Image
                className="block mx-auto h-24 rounded-full mb-2 --sm:mx-0 --sm:shrink-0"
                src="/cengiz-ulusoy.jpg"
                alt="test"
                width={98}
                height={96}
              />
              Cengiz Ulusoy
            </a>
          </Link>
        </p>
        <ul className="flex mt-3 text-base font-semibold uppercase">
          <li className="mx-4">
            <Link legacyBehavior href="/about">
              <a className="hover:text-primary transition">About</a>
            </Link>
          </li>
          <li className="mx-4">
            <Link legacyBehavior href="/work">
              <a className="hover:text-primary transition">Work</a>
            </Link>
          </li>
          <li className="mx-4">
            <Link legacyBehavior href="/contact">
              <a className="hover:text-primary transition">Contact</a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
