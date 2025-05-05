import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

const UserLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />

        <main className='flex-1'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, alias.
        </main>

      <Footer />
    </div>
  )
}

export default UserLayout