import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

export default function PagesDocument(
  props: DocumentInitialProps & { nonce: string | undefined }
) {
  const { nonce } = props;

  return (
    <Html lang="en" className="h-full bg-white">
      <Head nonce={nonce} />
      <body data-nonce={nonce} className={`h-full`}>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  );
}

PagesDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps & { nonce: string | undefined }> => {
  // read nonce value from headers
  const nonce = ctx.req?.headers?.['x-nonce'] as string | undefined;

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    nonce,
  };
};
