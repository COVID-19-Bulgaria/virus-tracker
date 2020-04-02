// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../pages_/privacy'
import ns0 from '../locales/bg/common.json'
import ns1 from '../locales/bg/privacy.json'

const namespaces = { 'common': ns0, 'privacy': ns1 }

export default function Page(p){
  return (
    <I18nProvider lang="bg" namespaces={namespaces} isStaticMode>
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

if(C.getInitialProps) {
  Page.getInitialProps = ctx => C.getInitialProps({ ...ctx, lang: 'bg'})
}





export * from '../pages_/privacy'
