import Link from 'next/link';

export default function Nav() {
  return (
    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <p className="mt-4 text-center text-gray-500">
        <Link href="/csp" className="text-blue-500 underline">
          Full CSP
        </Link>{' '}
        |{' '}
        <Link href="/csp-report-only" className="text-blue-500 underline">
          Report Only
        </Link>{' '}
        |{' '}
        <Link href="/pages-router" className="text-blue-500 underline">
          Pages router example
        </Link>
      </p>
    </div>
  );
}
