import React from 'react';
import Link from 'next/link';

import BasketButton from './basket-button';
import { Outer, Nav, Logo } from './styles';

export default class Header extends React.Component {
  render() {
    const { categories, tenant, simple } = this.props;

    if (simple) {
      return (
        <Outer simple={simple}>
          {tenant && <Logo src={tenant.logo_url} alt={tenant.company_name} />}
        </Outer>
      );
    }

    return (
      <Outer simple={simple}>
        <Link href="/">
          <a>
            {tenant && <Logo src={tenant.logo_url} alt={tenant.company_name} />}
          </a>
        </Link>

        <Nav>
          {categories &&
            categories.map(category => (
              <Link
                href="/category"
                as={category.link}
                key={category.link}
                prefetch
              >
                <a>{category.name}</a>
              </Link>
            ))}
          <Link href="/user" prefetch>
            <a>User profile</a>
          </Link>
        </Nav>
        <BasketButton />
      </Outer>
    );
  }
}
