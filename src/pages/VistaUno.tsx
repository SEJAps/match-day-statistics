import { FC } from "react";

const VistaUno: FC = () => {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto 1fr',
      width: '100dvw',
      height: '100dvh'
    }}>
      <section style={{
        display: 'grid',
        gridAutoColumns: '1fr ',
        gridTemplateRows: 'auto 1fr',
        gridColumn: 'span 2',
        width: '100%',
        alignItems: 'center',
      }}>
        <header style={{
          display: 'flex',
          gap: '1rem',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-around',
          gridColumn: 'span 2',
        }}>
          <article style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'pink',
            width: '100%',
            padding: '1rem',
          }}>1</article>
          <article style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'pink',
            width: '100%',
            padding: '1rem',
          }}>2</article>
        </header>
        <aside style={{
          background: 'orange',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          gridColumn: 'span 2'
        }}>
          Tiempo
        </aside>
      </section>
      <section style={{
        display: 'grid',
        gridColumn: 'span 2',
        gridTemplateColumns: 'repeat(auto-fit, minmax(6rem, 1fr))',
        padding: '1rem',
        gap: '1rem',
        justifyContent: 'center',
        height: '100%'
      }}>
        <article style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderRadius: '10px',
          background: 'red',

        }}>1</article>
        <article style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderRadius: '10px',
          background: 'red',

        }}>1</article>
        <article style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderRadius: '10px',
          background: 'red',

        }}>1</article>
        <article style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderRadius: '10px',
          background: 'red',

        }}>1</article>
        <article style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderRadius: '10px',
          background: 'red',

        }}>1</article>
        <article style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderRadius: '10px',
          background: 'red',

        }}>1</article>
        <article style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderRadius: '10px',
          background: 'red',

        }}>1</article>
        <article style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderRadius: '10px',
          background: 'red',

        }}>1</article>
        <article style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderRadius: '10px',
          background: 'red',

        }}>1</article>
        <article style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderRadius: '10px',
          background: 'red',

        }}>1</article>
        <article style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderRadius: '10px',
          background: 'red',

        }}>1</article>
        <article style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderRadius: '10px',
          background: 'red',

        }}>1</article>
      </section>
    </section>
  )
}

export default VistaUno