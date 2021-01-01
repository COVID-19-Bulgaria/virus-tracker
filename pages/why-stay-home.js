// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../pages_/why-stay-home'
import ns0 from '../locales/bg/common.json'
import ns1 from '../locales/bg/why-stay-home.json'

const namespaces = { 'common': ns0, 'why-stay-home': ns1 }

export default function Page(p){
  return (
    <I18nProvider 
      lang="bg" 
      namespaces={namespaces}  
      internals={{"defaultLanguage":"bg","isStaticMode":true}}
      false
    >
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

if(C && C.getInitialProps) {
  Page.getInitialProps = ctx => C.getInitialProps({ ...ctx, lang: 'bg'})
}








