import React from 'react';
import Link from 'next/link'

import Layout from '../components/layout';

export default () => (
    <Layout>
        <div>
            Hello world
            <Link href="/test">
                <a>here</a>
            </Link>{' '}
            <p>scoped!</p>
        </div>
    </Layout>
)