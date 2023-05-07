function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <footer>
        <div className='footer-content'>
          <div className='footer-content__socials'>
            <i className='fa-brands fa-twitter'></i>
            <i className='fa-brands fa-discord'></i>
            <i className='fa-brands fa-facebook'></i>
            <i className='fa-brands fa-youtube'></i>
          </div>
          <div className='footer-content__text'>
            <p>Privacy</p>
            <p>Terms of Use</p>
          </div>
          <div className='footer-content__text'>
            <p>
              Developed by{' '}
              <a href='https://dunprel-portfolio.vercel.app/' target='_blank'>
                Dunprel.{' '}
              </a>
              Copyright - All right reserved {year}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
