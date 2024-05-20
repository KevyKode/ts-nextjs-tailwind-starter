'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ButtonLink from '@/components/links/ButtonLink';

import Logo from '~/svg/Logo.svg';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>EV Charger Map</title>
      </Head>
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex flex-col items-center justify-center py-12 text-center">
        <div className="container mx-auto px-4">
          <Logo className="w-32 h-32 mx-auto mb-8" />
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to the EV Charger Station Gap Finder</h1> {/* This is the added header */}
          <h2 className="text-3xl font-bold text-white mb-6">Find the best possible locations for new EV Charger Station projects!</h2>
          <p className="text-lg text-white mb-8">
            Fast, 
          </p>
          <ButtonLink className="mt-6" href="/components" variant="light">
            See all components
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}