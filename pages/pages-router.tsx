import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Nav from '../app/nav';

export default function PagesRouter({
  nonce,
  csp,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Pages Router{' '}
          <small>
            (<code>content-security-policy</code>)
          </small>
        </h2>
        <dl>
          <dt>
            <code className="font-bold">x-nonce</code> header:
          </dt>
          <dd className="mb-8">
            <code>{nonce || 'Not found'}</code>
          </dd>
          <dt>
            <code className="font-bold">
              content-security-policy-report-only
            </code>{' '}
            header:
          </dt>
          <dd className="mb-8">
            <pre className="whitespace-pre-wrap">
              <code>{csp}</code>
            </pre>
          </dd>
        </dl>
      </div>

      <Nav />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  nonce: string | undefined;
  csp: string | undefined;
}> = async ({ req }) => {
  const nonce = req?.headers?.['x-nonce'] as string | undefined;
  const csp = req?.headers?.['content-security-policy'] as string | undefined;
  return { props: { nonce, csp } };
};
