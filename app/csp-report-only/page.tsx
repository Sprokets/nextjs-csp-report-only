import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Full CSP{' '}
          <small>
            (<code>content-security-policy-report-only</code>)
          </small>
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <p className="mt-4 text-center text-gray-500">
          <Link href="/csp" className="text-blue-500 underline">
            Full CSP
          </Link>{' '}
          |{' '}
          <Link href="/csp-report-only" className="text-blue-500 underline">
            Report Only
          </Link>
        </p>
      </div>
    </div>
  );
}
