import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Calculator from '../../components/calculator';
import Quotes from '../../components/quotes';
import Homepage from '../../components/homepage';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';

describe('Snapshots', () => {
  test(('Calculator'), () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(('Quotes Page'), () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(('Homepage'), () => {
    const tree = renderer.create(<Homepage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(('Footer'), () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(('Navbar'), () => {
    const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
