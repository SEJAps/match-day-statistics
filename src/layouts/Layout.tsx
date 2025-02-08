import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode,
  src?: string
}

const Layout: FC<Props> = ({ children, src }) => {
  return <section style={{
    backgroundImage: `url(${src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }}>
    {children}
  </section>
}

export default Layout;