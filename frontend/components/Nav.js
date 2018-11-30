import Link from 'next/link'
import NavSyles from './styles/NavStyles'

const Nav = () => (
  <NavSyles>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/items">
      <a>Items</a>
    </Link>
    <Link href="/signup">
      <a>Signup</a>
    </Link>
    <Link href="/order">
      <a>Orders</a>
    </Link>
    <Link href="/account">
      <a>Account</a>
    </Link>
  </NavSyles>
)

export default Nav
