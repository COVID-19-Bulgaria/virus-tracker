const SEO = {
  titleTemplate: 'COVID-19 Bulgaria | %s',
  title: 'Information website about the coronavirus in Bulgaria',
  description: 'Up-to-date information and charts for the spread of coronavirus in Bulgaria',
  canonical: 'https://coronavirus-bulgaria.org/en',
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'covid-19 information portal bulgaria,coronavirus portal,bulgaria covid graphs,COVID-19 Pandemic in Bulgaria,Bulgaria up-to-date covid information,coronavirus Bulgaria,SARS-CoV-2',
    },
    {
      name: 'google-site-verification',
      content: 'rCD1i89k9dNDePbcCDrVjMXVMGPktGH62eXlAabNEkw',
    },
  ],
  openGraph: {
    title: 'Information website about the coronavirus in Bulgaria',
    description: 'Up-to-date information and charts for the spread of coronavirus in Bulgaria',
    locale: 'en',
    site_name: 'Coronavirus-Bulgaria.org',
    images: [
      {
        url: 'https://coronavirus-bulgaria.org/static/images/open_graph_linechart.png',
        width: 1200,
        height: 630,
        alt: 'Disease timeline',
      },
    ],
  },
};

const ArticleJsonLdDefaults = {
  url: 'https://coronavirus-bulgaria.org/',
  title: '',
  description: '',
  authorName: 'COVID-19 Bulgaria Team',
  images: [],
  datePublished: '',
  dateModified: '',
  publisherName: 'Coronavirus-Bulgaria.org',
  publisherLogo: 'https://coronavirus-bulgaria.org/static/favicon/favicon-96x96.png',
};

export { SEO, ArticleJsonLdDefaults };
