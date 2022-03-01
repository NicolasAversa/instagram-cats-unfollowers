import type { NextPage } from 'next';
import Head from 'next/head';

export const UI: NextPage = () => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Head>
    <div className="bg-gray-50 m-auto max-w-md p-4 space-y-8 antialiased">
      <div className="bg-white p-5 rounded-2xl shadow-lg space-y-5 w-full">
        <textarea
          placeholder="Please use this text"
          className="bg-gray-50 border border-gray-200 p-4 placeholder-gray-400 rounded-lg text-sm w-full"
        />
        <div className="space-y-3">
          <button
            className="bg-indigo-400 font-semibold px-6 py-2 rounded-md text-indigo-50 text-sm w-full"
            type="submit"
          >
            Send crytpo-twit!
          </button>
          <button
            type="submit"
            className="bg-white border-2 border-red-400 duration-100 font-semibold hover:bg-red-400 hover:text-red-50 px-6 py-2 rounded-md text-red-400 text-sm transition-colors w-full"
          >
            Disconnect wallet
          </button>
        </div>
      </div>
      <section className="space-y-4">
        <article className="bg-white rounded-2xl shadow-md">
          <img
            src="https://www.fillmurray.com/640/360"
            className="rounded-t-2xl"
          />
          <div className="p-5 space-y-1">
            <h1 className="font-semibold text-gray-900 text-sm">Heading 1</h1>
            <p className="text-gray-900 text-sm">
              This is a paragraph, one or more lines of text. Each paragraph is
              displayed in a new line.
            </p>
          </div>
        </article>
        <article className="bg-white rounded-2xl shadow-md">
          <img
            src="https://www.fillmurray.com/640/360"
            className="rounded-t-2xl"
          />
          <div className="p-6 space-y-1">
            <h1 className="font-semibold text-gray-900 text-sm">Heading 1</h1>
            <p className="text-gray-900 text-sm">
              This is a paragraph, one or more lines of text. Each paragraph is
              displayed in a new line.
            </p>
          </div>
        </article>
        <article className="bg-white rounded-2xl shadow-md">
          <img
            src="https://www.fillmurray.com/640/360"
            className="rounded-t-2xl"
          />
          <div className="p-6 space-y-1">
            <h1 className="font-semibold text-gray-900 text-sm">Heading 1</h1>
            <p className="text-gray-900 text-sm">
              This is a paragraph, one or more lines of text. Each paragraph is
              displayed in a new line.
            </p>
          </div>
        </article>
      </section>
    </div>
  </>
);

export default UI;
