import React from 'react'
import style from "./Numbers.module.css"

function Numbers() {
  return (
    <main className={style.numbersSection}>
      <h1 style={style.h1}>Numbers Behind Our Success</h1>
      <section className={style.imageSection}>
        <section className={style.imageSection1}>
          <figcaption className={style.imageA}>1000+<br /> High-Quality Products</figcaption>
          <figcaption className={style.imageB}> 200+<br /> Happy Customers</figcaption>
          <figcaption className={style.imageC}>15+ <br />International Brands</figcaption>
          
        {/* <figcaption className={style.imageA}> <img  src={shoes} alt="showcasea hight quality product" ></img> </figcaption>
        <figcaption className={style.imageB}> <img src={fashion1}  alt="showcas a happy customer" ></img>  </figcaption>
        <figcaption  className={style.imageC}><img src={makeup3} alt="showcae some products of some brands" ></img> </figcaption>  */}
        </section>
        <section className={style.imageSection2}>
          <figcaption className={style.imageD} >Options For all Tastes</figcaption>
          <figcaption className={style.imageE}>7+ <br />Years in Business </figcaption>
          {/* <figure><img src={fashion7} className={style.imageD} alt="showcse different colors of a product" ></img> </figure> */}
          {/* <figure><img src={fashion4} className={style.imageE} alt="showase a fashionable outfit" ></img></figure> */}
        </section>
      </section>
    </main>
  )
}

export default Numbers