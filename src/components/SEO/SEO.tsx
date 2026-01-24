import Head from 'next/head';

type SEOProps = {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
};

const SEO = ({ title, description, canonical, image }: SEOProps) => {
  const fullTitle = `KnowMe | ${title}`;
  const resultDescription = description || 'Портал обмена знаний';

  return (
    <Head>
      <title>{fullTitle}</title>

      <meta name="description" content={resultDescription} />

      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resultDescription} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
};

export default SEO;
