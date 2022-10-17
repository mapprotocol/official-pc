import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Brand = () => {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className='home-container bg-bg px-4 py-32 font-primary'>
        <div className='logo-title'>
          <span>MAP Protocol Logo</span>
          <span>
            The MAP logo is displayed in the official colors and usage patterns.
            Do not place the logo on top of other objects and leave a reasonable
            amount of margin around the outside so the logo is clearly visible.
          </span>
          <a href='https://files.maplabs.io/bigfiles/MapProtocolLogo.zip'>
            Download Logo & Symbol
          </a>
        </div>

        <div className='logo-content'>
          <div className='logo-item'>
            <Image src='assets/brand/one-logo.png' alt='' />
            <div className='logo-item-down'>
              <span>Black Logo</span>
              <a href='/assets/logo/one/black.svg'>
                <Image src='assets/brand/svg.png' alt='' />
              </a>
              <a href='https://files.maplabs.io/eps/black-tile.eps'>
                <Image src='assets/brand/eps.png' alt='' />
              </a>
              <a href='assets/logo/one/black.png'>
                <Image src='assets/brand/png.png' alt='' />
              </a>
            </div>
          </div>

          <div className='logo-item'>
            <Image alt='' src='../assets/brand/two-logo.png' />
            <div className='logo-item-down'>
              <span>White Logo</span>
              <a href='assets/logo/one/white.svg' download='MapLogoWhite'>
                <Image alt='' src='../assets/brand/svg.png' />
              </a>
              <a
                href='https://files.maplabs.io/eps/white-tile.eps'
                download='MapLogoWhite'
              >
                <Image alt='' src='../assets/brand/eps.png' />
              </a>
              <a href='assets/logo/one/white.png' download='MapLogoWhite'>
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/three-logo.png' />
            <div className='logo-item-down'>
              <span>Gradient Logo</span>
              <a
                href='assets/logo/one/gradient-white.svg'
                download='MapLogoGradientBlack'
              >
                <Image alt='' src='../assets/brand/svg.png' />
              </a>
              <a
                href='https://files.maplabs.io/eps/gradient-black-tile.eps'
                download='MapLogoGradientBlack'
              >
                <Image alt='' src='../assets/brand/eps.png' />
              </a>
              <a
                href='assets/logo/one/gradient-white.png'
                download='MapLogoGradientBlack'
              >
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/four-logo.png' />
            <div className='logo-item-down'>
              <span>Gradient Logo</span>
              <a
                href='assets/logo/one/gradient-black.svg'
                download='MapLogoGradientWhite'
              >
                <Image alt='' src='../assets/brand/svg.png' />
              </a>
              <a
                href='https://files.maplabs.io/eps/gradient-white-tile.eps'
                download='MapLogoGradientWhite'
              >
                <Image alt='' src='../assets/brand/eps.png' />
              </a>
              <a
                href='assets/logo/one/gradient-black.png'
                download='MapLogoGradientWhite'
              >
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
        </div>

        <div className='logo-content'>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/white-vertical.png' />
            <div className='logo-item-down'>
              <span>Black Logo</span>
              <a href='assets/logo/two/black.svg' download='MapLogoBlack'>
                <Image alt='' src='../assets/brand/svg.png' />
              </a>
              <a
                href='https://files.maplabs.io/eps/black-vertical.eps'
                download='MapLogoBlack'
              >
                <Image alt='' src='../assets/brand/eps.png' />
              </a>
              <a href='assets/logo/two/black.png' download='MapLogoBlack'>
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/black-vertical.png' />
            <div className='logo-item-down'>
              <span>White Logo</span>
              <a href='assets/logo/two/white.svg' download='MapLogoWhite'>
                <Image alt='' src='../assets/brand/svg.png' />
              </a>
              <a
                href='https://files.maplabs.io/eps/white-vertical.eps'
                download='MapLogoWhite'
              >
                <Image alt='' src='../assets/brand/eps.png' />
              </a>
              <a href='assets/logo/two/white.png' download='MapLogoWhite'>
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/gradient-white-vertical.png' />
            <div className='logo-item-down'>
              <span>Gradient Logo</span>
              <a
                href='assets/logo/two/gradient-white.svg'
                download='MapLogoGradientBlack'
              >
                <Image alt='' src='../assets/brand/svg.png' />
              </a>
              <a
                href='https://files.maplabs.io/eps/gradient-black-vertical.eps'
                download='MapLogoGradientBlack'
              >
                <Image alt='' src='../assets/brand/eps.png' />
              </a>
              <a
                href='assets/logo/two/gradient-white.png'
                download='MapLogoGradientBlack'
              >
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/gradient-black-vertical.png' />
            <div className='logo-item-down'>
              <span>Gradient Logo</span>
              <a
                href='assets/logo/two/gradient-black.svg'
                download='MapLogoGradientWhite'
              >
                <Image alt='' src='../assets/brand/svg.png' />
              </a>
              <a
                href='https://files.maplabs.io/eps/gradient-white-vertical.eps'
                download='MapLogoGradientWhite'
              >
                <Image alt='' src='../assets/brand/eps.png' />
              </a>
              <a
                href='assets/logo/two/gradient-black.png'
                download='MapLogoGradientWhite'
              >
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
        </div>

        <div className='logo-content'>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/black-logo.png' />
            <div className='logo-item-down'>
              <span>Black Logo</span>
              <a href='assets/logo/three/black.svg' download='MapLogoBlack'>
                <Image alt='' src='../assets/brand/svg.png' />
              </a>
              <a
                href='https://files.maplabs.io/eps/black-logo.eps'
                download='MapLogoBlack'
              >
                <Image alt='' src='../assets/brand/eps.png' />
              </a>
              <a href='assets/logo/three/black.png' download='MapLogoBlack'>
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/white-logo.png' />
            <div className='logo-item-down'>
              <span>White Logo</span>
              <a href='assets/logo/three/white.svg' download='MapLogoWhite'>
                <Image alt='' src='../assets/brand/svg.png' />
              </a>
              <a
                href='https://files.maplabs.io/eps/white-logo.eps'
                download='MapLogoWhite'
              >
                <Image alt='' src='../assets/brand/eps.png' />
              </a>
              <a href='assets/logo/three/white.png' download='MapLogoWhite'>
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/gradient-white.png' />
            <div className='logo-item-down'>
              <span>Gradient Logo</span>
              <a
                href='assets/logo/three/gradient.svg'
                download='MapLogoGradient'
              >
                <Image alt='' src='../assets/brand/svg.png' />
              </a>
              <a
                href='https://files.maplabs.io/eps/gradient-logo.eps'
                download='MapLogoGradient'
              >
                <Image alt='' src='../assets/brand/eps.png' />
              </a>
              <a
                href='assets/logo/three/gradient.png'
                download='MapLogoGradient'
              >
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/gradient-black.png' />
            <div className='logo-item-down'>
              <span>Gradient Logo</span>
              <a
                href='assets/logo/three/gradient.svg'
                download='MapLogoGradient'
              >
                <Image alt='' src='../assets/brand/svg.png' />
              </a>
              <a
                href='https://files.maplabs.io/eps/gradient-logo.eps'
                download='MapLogoGradient'
              >
                <Image alt='' src='../assets/brand/eps.png' />
              </a>
              <a
                href='assets/logo/three/gradient.png'
                download='MapLogoGradient'
              >
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
        </div>

        <div className='logo-title logo-title-two mt-12'>
          <span>MAP Protocol Badges</span>
          <span>
            Projects using MAP should display this badge on their pages and
            apps.
            <br />
            Here you can download the badge in PNG format.
          </span>
        </div>

        <div className='logo-content'>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/map-gradient-black.png' />
            <div className='logo-item-down'>
              <span>White Badge#1</span>
              <a
                href='assets/logo/four/gradient-black.png'
                download='GradientBlack'
              >
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/map-black.png' />
            <div className='logo-item-down'>
              <span>White Badge#2</span>
              <a href='assets/logo/four/black-logo.png' download='MapLogoBlack'>
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/map-gradient-white.png' />
            <div className='logo-item-down'>
              <span>Black Badge#1</span>
              <a
                href='assets/logo/four/gradient-white.png'
                download='GradientWhite'
              >
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
          <div className='logo-item'>
            <Image alt='' src='../assets/brand/map-white.png' />
            <div className='logo-item-down'>
              <span>Black Badge#2</span>
              <a href='assets/logo/four/white-logo.png' download='MapLogoWhite'>
                <Image alt='' src='../assets/brand/png.png' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Brand;
