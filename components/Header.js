import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name, role }) {
  return (
    <header className="pt-20 pb-12">
      <p className="text-3xl dark:text-white text-center">
        <Link href="/">
          <Image
            className="block mx-auto w-24 h-24 rounded-full mb-2 bg-gradient-conic from-gradient-3 to-gradient-4"
            src="/images/cengiz-ulusoy.jpg"
            alt="test"
            width={98}
            height={96}
          />
        </Link>
        <Link href="/">
          {name}
          <span className="block dark:text-white uppercase mt-1 mb-3 text-xs font-bold opacity-50">
            {role}
          </span>
        </Link>
      </p>
    </header>
  );
}
