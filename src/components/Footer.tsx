import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <>
   
    <div className={styles['footer']}>
       <div className={styles['services']}>
      <p>Customer Service</p>
      
      <div className={styles['footerlinks']}>
          <ul>
        <li>Help Center</li>
        <li>Track Your Order</li>
        <li>Account Login</li>
        <li>Returns and Exchanges</li>
          </ul>
      </div>
      </div>
       <div className={styles['services']}>
      <p>Follow</p>
      
      <div className={styles['footerlinks']}>
          <ul>
        <li>Help Center</li>
        <li>Track Your Order</li>
        <li>Account Login</li>
        <li>Returns and Exchanges</li>
          </ul>
      </div>
      </div>
       <div className={styles['services']}>
      <p>About</p>
      
      <div className={styles['footerlinks']}>
          <ul>
        <li>About Us</li>
        <li>Reward Program</li>
        <li>Careers</li>
          </ul>
      </div>
      </div>
       <div className={styles['services']}>
      <p>Work With Us</p>
      
      <div className={styles['footerlinks']}>
          <ul>
        <li>Contribute to M&S</li>
        <li>Affilate Program</li>
          </ul>
      </div>
      </div>
  
      
      
    </div>
    </>
  )
}

export default Footer;