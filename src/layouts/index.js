import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import MainHeader from '../components/MainHeader';
import MainContainer from '../components/MainContainer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="vinnocenti"
      meta={[
        {
          name: 'description',
          content: 'personal website, portfolio and blog',
        },
        {
          name: 'keywords',
          content: 'blog, portfolio, valerio, innocenti, sedili',
        },
      ]}
    />
    <MainHeader />
    <MainContainer>{children()}</MainContainer>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
