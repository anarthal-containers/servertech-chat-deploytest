import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import { TextField, Button } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>BoostServerTech chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />
        <div className={styles.bodycontainer}>
          <div className='text-center p-5'>
            <p className='text-3xl p-3 m-0'>Welcome to</p>
            <p className='text-7xl p-3 m-0'>BoostServerTech Chat</p>
            <p className='text-xl p-3 m-0'>A chat app written using the Boost C++ libraries</p>
          </div>
          <div className='flex justify-center p-5'>
            <div className='bg-white rounded-2xl p-7 flex flex-col' style={{ minWidth: '50%' }}>
              <p className='text-center text-5xl p-3 m-0'>Ready to try it?</p>
              <div className='pt-8 pr-5 pl-5 pb-3 flex'>
                <TextField variant='standard' required={true} placeholder='Choose a username...' className='pr-4 pl-4 flex-1' />
                <Button variant='contained'>Get started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
