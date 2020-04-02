// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../pages_/open-graph-linechart'
import ns0 from '../locales/bg/common.json'

const namespaces = { 'common': ns0 }

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





export * from '../pages_/open-graph-linechart'
