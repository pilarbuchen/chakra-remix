import { createBoard } from '@wixc3/react-board';
import MyChakraComponent from '../../../src/components/my-chakra-component/my-chakra-component';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const emotionCache = createCache({
    key: 'emotion-css-cache',
    prepend: true, // ensures styles are prepended to the <head>, instead of appended
});

export default createBoard({
    name: 'MyChakraComponent',
    Board: () => (

            <MyChakraComponent />
    ),
});
