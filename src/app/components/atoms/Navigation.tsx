import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css";
const Navigation = () => {
  return (
    <nav className={styles.componente}>
        <Link href={"/"}>Inicio</Link>
        <Link href={"/populares"}>Populares</Link>
        <Link href={"/nuevo-producto"}>Nuevo producto</Link>
    </nav>
  )
}

export default Navigation
