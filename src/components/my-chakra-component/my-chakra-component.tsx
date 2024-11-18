import { useState } from 'react';
import {
    Box,
    Flex,
    Heading,
    Button,
    VStack,
    Container,
    Stack,
    Text,
    SimpleGrid,
    ChakraProvider,
    Input,
    defaultSystem,
} from '@chakra-ui/react';
import { FiHome, FiUser, FiSettings, FiStar, FiHeart, FiCheckCircle } from 'react-icons/fi';
import styles from './my-chakra-component.module.scss';
import classNames from 'classnames';

const MyChakraComponent = () => {
    const [email, setEmail] = useState('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            setEmail('');
            setIsSubscribed(true);
        }
    };

    return (
        <ChakraProvider value={defaultSystem}>
            {/* Navigation */}
            <Box className={styles.navigation} bg="white" px={4} boxShadow="sm">
                <Flex
                    className={styles.navFlex}
                    h={16}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Button
                        className={styles.menuButton}
                        onClick={() => alert('Menu opened')}
                        display={{ base: 'flex', md: 'none' }}
                    >
                        Menu
                    </Button>

                    <Flex className={styles.logoContainer} alignItems="center">
                        <Heading className={styles.logo} size="md" color="teal.500">
                            MyApp
                        </Heading>
                    </Flex>

                    <Flex
                        className={styles.navLinks}
                        display={{ base: 'none', md: 'flex' }}
                        gap={4}
                    >
                        <Button className={styles.navButton} variant="ghost">
                            <FiHome style={{ marginRight: '8px' }} />
                            Home
                        </Button>
                        <Button className={styles.navButton} variant="ghost">
                            <FiUser style={{ marginRight: '8px' }} />
                            Profile
                        </Button>
                        <Button className={styles.navButton} variant="ghost">
                            <FiSettings style={{ marginRight: '8px' }} />
                            Settings
                        </Button>
                    </Flex>

                    <Box
                        className={styles.profileButton}
                        as="button"
                        w="8"
                        h="8"
                        bg="gray.200"
                        borderRadius="full"
                        onClick={() => alert('Profile menu opened')}
                    />
                </Flex>
            </Box>

            {/* Hero Section */}
            <Box className={classNames(styles.heroSection, styles.box2)} py={20} w="100%">
                <Container className={styles.heroContainer} maxW="container.xl">
                    <Stack
                        className={classNames(styles.heroContent, styles.stack)}
                        alignItems="center"
                        textAlign="center"
                    >
                        <Heading className={styles.heroTitle} size="2xl">
                            Welcome to Our Platform
                        </Heading>
                        <Text className={styles.heroText} fontSize="xl">
                            Discover amazing features and boost your productivity
                        </Text>
                        <Button
                            className={styles.heroButton}
                            size="lg"
                            colorScheme="white"
                            variant="outline"
                            _hover={{ bg: 'white', color: 'teal.500' }}
                        >
                            Get Started
                        </Button>
                    </Stack>
                </Container>
            </Box>

            {/* Features Grid */}
            <Container className={styles.featuresContainer} maxW="container.xl" py={16}>
                <SimpleGrid className={styles.featuresGrid} columns={{ base: 1, md: 3 }} gap={8}>
                    {[
                        { icon: FiStar, title: 'Feature 1', desc: 'Amazing feature description' },
                        { icon: FiHeart, title: 'Feature 2', desc: 'Wonderful feature details' },
                        {
                            icon: FiCheckCircle,
                            title: 'Feature 3',
                            desc: 'Awesome capability info',
                        },
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            className={classNames(styles.featureWrapper, styles['box-container'])}
                        >
                            <Box
                                p={6}
                                boxShadow="lg"
                                borderRadius="lg"
                                textAlign="center"
                                _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
                                m="4"
                                className={classNames(styles.featureBox, styles.box)}
                            >
                                <Box
                                    as={feature.icon}
                                    w={10}
                                    h={10}
                                    color="teal.500"
                                    mb={4}
                                    className={classNames(styles.featureIcon, styles.box1)}
                                />
                                <Heading className={styles.featureTitle} size="md" mb={2}>
                                    {feature.title}
                                </Heading>
                                <Text className={styles.featureDescription} color="gray.600">
                                    {feature.desc}
                                </Text>
                            </Box>
                        </div>
                    ))}
                </SimpleGrid>
            </Container>

            {/* Newsletter Section */}
            <Box className={styles.newsletterSection} bg="gray.50" py={16} w="100%">
                <Container
                    className={styles.newsletterContainer}
                    maxW="container.md"
                    textAlign="center"
                >
                    <VStack className={styles.newsletterContent}>
                        <Heading className={styles.newsletterTitle} size="lg">
                            Subscribe to Our Newsletter
                        </Heading>
                        <Text className={styles.newsletterText} color="gray.600">
                            Stay updated with our latest news and updates
                        </Text>
                        <Flex className={styles.newsletterForm} w="full" maxW="md" gap="4">
                            <Input
                                className={styles.newsletterInput}
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                bg="white"
                            />
                            <Button
                                className={styles.newsletterButton}
                                colorScheme="teal"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </Button>
                        </Flex>
                    </VStack>
                </Container>
            </Box>

            {/* Stats Section */}
            <Container className={styles.statsContainer} maxW="container.xl" py={16}>
                <SimpleGrid className={styles.statsGrid} columns={{ base: 2, md: 4 }} gap={8}>
                    {[
                        { label: 'Users', value: '10K+' },
                        { label: 'Downloads', value: '50K+' },
                        { label: 'Countries', value: '30+' },
                        { label: 'Reviews', value: '5K+' },
                    ].map((stat, idx) => (
                        <Box key={idx} className={styles.statBox} textAlign="center" m="4">
                            <Text
                                className={styles.statValue}
                                fontSize="4xl"
                                fontWeight="bold"
                                color="teal.500"
                            >
                                {stat.value}
                            </Text>
                            <Text className={styles.statLabel} color="gray.600">
                                {stat.label}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>

            {/* Footer */}
            <Box className={styles.footer} bg="gray.800" color="white" py={8} w="100%">
                <Container className={styles.footerContainer} maxW="container.xl">
                    <SimpleGrid className={styles.footerGrid} columns={{ base: 1, md: 4 }} gap={8}>
                        {[
                            {
                                title: 'Company',
                                links: ['About', 'Careers', 'Contact'],
                            },
                            {
                                title: 'Resources',
                                links: ['Blog', 'Documentation', 'Help Center'],
                            },
                            {
                                title: 'Legal',
                                links: ['Privacy', 'Terms', 'Security'],
                            },
                            {
                                title: 'Connect',
                                links: ['Twitter', 'LinkedIn', 'GitHub'],
                            },
                        ].map((section, idx) => (
                            <VStack key={idx} className={styles.footerSection} align="start">
                                <Heading className={styles.footerHeading} size="md">
                                    {section.title}
                                </Heading>
                                {section.links.map((link, linkIdx) => (
                                    <Button
                                        key={linkIdx}
                                        className={styles.footerLink}
                                        variant="ghost"
                                        color="gray.400"
                                    >
                                        {link}
                                    </Button>
                                ))}
                            </VStack>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
        </ChakraProvider>
    );
};

export default MyChakraComponent;
