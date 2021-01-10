const SEO = {
  titleTemplate: 'COVID-19 България | %s',
  title: 'Информационен уебсайт за коронавируса в България',
  description: 'Актуална информация и графики за разпространението на коронавируса в България',
  canonical: 'https://coronavirus-bulgaria.org',
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'информационен портал,информационен уебсайт,информационен портал ковид,ковид графики,коронавирус графики,Пандемия от COVID-19 в България,щаб коронавирус,брифинг щаб,коронавирус,актуална информация коронавирус,ковид България,ковид-19 България,SARS-CoV-2',
    },
    {
      name: 'google-site-verification',
      content: 'rCD1i89k9dNDePbcCDrVjMXVMGPktGH62eXlAabNEkw',
    },
  ],
  openGraph: {
    title: 'Информационен уебсайт за коронавируса в България',
    description: 'Актуална информация и графики за разпространението на коронавируса в България',
    locale: 'bg',
    site_name: 'Coronavirus-Bulgaria.org',
    images: [
      {
        url: 'https://coronavirus-bulgaria.org/static/images/open_graph_linechart.png',
        width: 1200,
        height: 630,
        alt: 'Хронология на заразата',
      },
    ],
  },
};

const ArticleJsonLdDefaults = {
  url: 'https://coronavirus-bulgaria.org/',
  title: '',
  description: '',
  authorName: 'Екипът на COVID-19 България',
  images: [],
  datePublished: '',
  dateModified: '',
  publisherName: 'Coronavirus-Bulgaria.org',
  publisherLogo: 'https://coronavirus-bulgaria.org/static/favicon/favicon-96x96.png',
};

export { SEO, ArticleJsonLdDefaults };
