import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from 'components/Img';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Button from 'components/Button';
import bannerImg from 'assets/images/homepage-banner.png';
import messages from './messages';

function Banner() {
  return (
    <section className="relative">
      <Img src={bannerImg} ratio={0.5} />
      <div className="absolute pin-t pin-l w-full h-full">
        <div className="container h-full flex items-center">
          <div className="w-1/3 ml-1/12">
            <H1 className="text-white mb-20">
              <FormattedMessage {...messages.banner.titles[0] } />
              <span className="font-thin italic">
                <FormattedMessage {...messages.banner.seperator } />
              </span>
              <FormattedMessage {...messages.banner.titles[1] } />
            </H1>
            <p className="font-montserrat text-24 text-white font-bold tracking-wide leading-normal">
              <FormattedMessage {...messages.banner.description } />
            </p>
            <div>
              <Button backgroundColor="white">
                <FormattedMessage {...messages.banner.button } />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;