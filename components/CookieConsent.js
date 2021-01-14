import React, { useEffect } from 'react';

import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const CookieConsent = () => {
  const { lang } = useTranslation();

  useEffect(() => {
    const config = {
      acceptAll: true,
      htmlTexts: true,
      translations: {
        zz: {
          privacyPolicyUrl: '/поверителност',
        },
        en: {
          consentNotice: {
            description:
              'We use cookies to improve user experience. Choose what cookies you allow us to use. You can read more in our <a href="/privacy" title="Privacy Policy">Privacy Policy</a>.',
            learnMore: 'Show Details',
          },
          purposes: {
            security: 'Security',
            analytics: 'Analytics',
          },
          ok: 'Accept All',
          decline: 'Decline All',
        },
        bg: {
          acceptAll: 'Приемам всички',
          acceptSelected: 'Приемам избраните',
          close: 'Изход',
          consentModal: {
            description: 'Можете да прегледате и изберете кои външни услуги да функционират и да събират информация.',
            title: 'Предлагани услуги'
          },
          consentNotice: {
            changeDescription: 'Има новости по бисквитките от външни услуги от последното Ви посещение и е необходимо да преразгледате решението си.',
            description: 'Този сайт използва бисквитки и Ви дава право да изберете записването на определени или всички. За повече информация посетете нашата <a href="/поверителност" title="Политика за поверителност">Политика за поверителност</a>.',
            learnMore: 'Избор',
          },
          contextualConsent: {
            acceptAlways: 'Винаги',
            acceptOnce: 'Да',
            description: 'Искате ли да заредим съдържание от външна услуга {title}?'
          },
          decline: 'Отказвам всички',
          ok: 'Приемам всички',
          poweredBy: 'Реализирано с Klaro!',
          privacyPolicy: {
            name: 'Политика за поверителност',
            text: 'За повече информация, моля прочетете нашата {privacyPolicy}.'
          },
          purposeItem: {
            service: 'услуга',
            services: 'услуги'
          },
          purposes: {
            security: 'Сигурност',
            analytics: 'Аналитични',
          },
          save: 'Запиши',
          service: {
            disableAll: {
              description: 'Можете да приемете или отхвърлите всички услуги.',
              title: 'Приемам / Отхвърлям всички услуги'
            },
            optOut: {
              description: 'Тези услуги за включени по подразбиране, но можете да ги откажете',
              title: '(възможност за отказ)'
            },
            purpose: 'предназначение',
            purposes: 'предназначения',
            required: {
              description: 'Тези услуги са задължителни за работата на уебсайта.',
              title: '(задължителни)'
            }
          }
        }
      },
      services: [
        {
          name: 'googleAnalytics',
          title: 'Google Analytics',
          purposes: ['analytics'],
        },
        {
          name: 'cloudflare',
          title: 'Cloudflare',
          purposes: ['security'],
          required: true,
        },
      ],
      lang: lang,
    };

    // we assign the Klaro module to the window, so that we can access it in JS
    // window.klaro = Klaro;
    window.klaroConfig = config;

    // we set up Klaro with the config
    window.klaro.setup(config);
  }, []);

  return (
    <div>
      <Head>
        <script defer src="/static/klaro.js" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <script async type="text/plain" data-type="text/javascript" data-name="googleAnalytics" data-src="https://www.googletagmanager.com/gtag/js?id=G-JCGPV01TVD"></script>
        <script
          type="text/plain"
          data-type="text/javascript"
          data-name="googleAnalytics"
          dangerouslySetInnerHTML={{ __html:
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-JCGPV01TVD');`
          }}>
        </script>
      </Head>
    </div>
  );
};

export { CookieConsent };
