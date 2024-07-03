import React from 'react'
import styles from '../styles/Header.module.css'
import Navbar from './Navbar'


export default function Header() {
  return (
    <header className={`${styles.header_layout} xl:mt-20 bg-transparent lg:w-1/4` }>
      <img className={`${styles.header_photo}  shadow-2xl shadow-zinc-800/50  lg:mt-12`} src="images/photo-profil.png" alt="photo" />
        <Navbar/>
    </header>
  )
}
