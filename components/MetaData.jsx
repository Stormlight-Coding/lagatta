import Head from 'next/head'

export default ({ meta }) => (
  <Head>
    {meta && meta.title && <title>{meta.title}</title>}
    {meta && meta.description && (
      <meta name="description" content={meta.description} />
    )}
    {meta && meta.description && (
      <meta name="keywords" content={meta.keywords} />
    )}
  </Head>
);
