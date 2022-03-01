import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { SyntheticEvent, useState } from 'react';

export const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [userFollowers, setUserFollowers] = useState({});

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    axios.get('/api/followers');
  };
  return (
    <div>
      <Head>
        <title>Fetch Twitter Follower</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Fetch A Twitter Follower</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="pepe">
            Enter a Twitter username
            <input
              id="pepe"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
        {/* {userFollowers.followerCount >= 0 ? (
          <p>
            Followers:
            {' '}
            {userFollowers.followerCount}
          </p>
        ) : (
          <p>{userFollowers.error}</p>
        )} */}
      </main>
    </div>
  );
};

export default Home;
