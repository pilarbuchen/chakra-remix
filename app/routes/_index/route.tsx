import classNames from 'classnames';
import styles from './_index.module.scss';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import commonStyles from '~/styles/common-styles.module.scss';
import { getUrlOriginWithPath } from '~/utils';
import TypescriptSvg from '../../../src/assets/svg/typescript.svg';
import ViteSvg from '../../../src/assets/svg/vite.svg';
import MyChakraComponent from '../../../src/components/my-chakra-component/my-chakra-component';
import { ChakraProvider, defaultSystem, Button, Text, Box, Stack, Input } from '@chakra-ui/react';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div>
                     <ChakraProvider value={defaultSystem}>
      <Box textAlign="center" padding="20px">
       <Text fontSize="2xl" marginBottom="8px">
          Welcome to Codux with Chakra UI!
        </Text>
         <Stack marginY="20px">
          <Button colorPalette="teal" size="lg">
            Click Me
          </Button>
          <Button colorPalette="pink" size="md">
            Another Button
          </Button>
          <Input placeholder="Enter your text here" size="md" />
        </Stack>

        <Box borderRadius="md" boxShadow="lg" padding="20px" marginTop="20px" backgroundColor="gray.50">
          <Text fontSize="xl" fontWeight="bold" marginBottom="4">
            Card Header
          </Text>
          <Text>
            This is some content inside the card. Chakra UI makes it easy to create responsive and stylish UI components.
          </Text>
        </Box>
      </Box>
      </ChakraProvider>
        <div className={styles.root}>

            <h2 className={styles.title}>Welcome to your App Homepage 🎉</h2>
            <span>
                Double click to edit App component
                <br />
                &amp; drag here elements from + Add <b>Elements</b> Panel
            </span>
            <p className={styles.paragraph}>
                This project is using <img src={ViteSvg} width="12" />+
                <img src={TypescriptSvg} width="12" />
                Visit vitejs.dev to learn more.{' '}
            </p>
        </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
