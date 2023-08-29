import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

export default function PagesRouter({
  nonce,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      Hello! My <code>nonce</code> is <code>{nonce}</code>{' '}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  nonce: string | undefined;
}> = async ({ req }) => {
  const nonce = req?.headers?.['x-nonce'] as string | undefined;
  return { props: { nonce } };
};
