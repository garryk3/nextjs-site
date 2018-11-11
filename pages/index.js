import react from 'react';
import Link from 'next/link'

export default () => (
    <div>
        Hello world
        <Link href="/test">
            <a>here</a>
        </Link>{' '}
        <p>scoped!</p>
        <style jsx>{`
      p {
        color: blue;
      }
      div {
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
        <style global jsx>{`
      body {
        background: black;
      }
    `}</style>
    </div>
)