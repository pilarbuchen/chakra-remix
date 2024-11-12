import React, { useState } from 'react';
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

const MyChakraComponent = () => {
    const [email, setEmail] = useState('');
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
            <Box bg="white" px={4} boxShadow="sm">
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <Button
                        onClick={() => alert('Menu opened')}
                        display={{ base: 'flex', md: 'none' }}
                    >
                        Menu
                    </Button>

                    <Flex alignItems="center">
                        <Heading size="md" color="teal.500">
                            MyApp
                        </Heading>
                    </Flex>

                    <Flex display={{ base: 'none', md: 'flex' }} gap={4}>
                        <Button variant="ghost">
                            <FiHome style={{ marginRight: '8px' }} />
                            Home
                        </Button>
                        <Button variant="ghost">
                            <FiUser style={{ marginRight: '8px' }} />
                            Profile
                        </Button>
                        <Button variant="ghost">
                            <FiSettings style={{ marginRight: '8px' }} />
                            Settings
                        </Button>
                    </Flex>

                    <Box
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
            <Box bg="teal.500" color="white" py={20} w='100%'>
                <Container maxW="container.xl">
                    <Stack alignItems="center" textAlign="center">
                        <Heading size="2xl">Welcome to Our Platform</Heading>
                        <Text fontSize="xl">
                            Discover amazing features and boost your productivity
                        </Text>
                        <Button
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
            <Container maxW="container.xl" py={16}>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                    {[
                        { icon: FiStar, title: 'Feature 1', desc: 'Amazing feature description' },
                        { icon: FiHeart, title: 'Feature 2', desc: 'Wonderful feature details' },
                        {
                            icon: FiCheckCircle,
                            title: 'Feature 3',
                            desc: 'Awesome capability info',
                        },
                    ].map((feature, idx) => (
                        <Box
                            key={idx}
                            p={6}
                            boxShadow="lg"
                            borderRadius="lg"
                            bg="white"
                            textAlign="center"
                            _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
                            m="4"
                        >
                            <Box as={feature.icon} w={10} h={10} color="teal.500" mb={4} />
                            <Heading size="md" mb={2}>
                                {feature.title}
                            </Heading>
                            <Text color="gray.600">{feature.desc}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>

            {/* Newsletter Section */}
            <Box bg="gray.50" py={16} w='100%'>
                <Container maxW="container.md" textAlign="center">
                    <VStack>
                        <Heading size="lg">Subscribe to Our Newsletter</Heading>
                        <Text color="gray.600">Stay updated with our latest news and updates</Text>
                        <Flex w="full" maxW="md" gap="4">
                            <Input
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                bg="white"
                            />
                            <Button colorScheme="teal" onClick={handleSubscribe}>
                                Subscribe
                            </Button>
                        </Flex>
                    </VStack>
                </Container>
            </Box>

            {/* Stats Section */}
            <Container maxW="container.xl" py={16}>
                <SimpleGrid columns={{ base: 2, md: 4 }} gap={8}>
                    {[
                        { label: 'Users', value: '10K+' },
                        { label: 'Downloads', value: '50K+' },
                        { label: 'Countries', value: '30+' },
                        { label: 'Reviews', value: '5K+' },
                    ].map((stat, idx) => (
                        <Box key={idx} textAlign="center" m="4">
                            <Text fontSize="4xl" fontWeight="bold" color="teal.500">
                                {stat.value}
                            </Text>
                            <Text color="gray.600">{stat.label}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>

            {/* Footer */}
            <Box bg="gray.800" color="white" py={8} w='100%'>
                <Container maxW="container.xl">
                    <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
                        <VStack align="start">
                            <Heading size="md">Company</Heading>
                            <Button variant="ghost" color="gray.400">
                                About
                            </Button>
                            <Button variant="ghost" color="gray.400">
                                Careers
                            </Button>
                            <Button variant="ghost" color="gray.400">
                                Contact
                            </Button>
                        </VStack>
                        <VStack align="start">
                            <Heading size="md">Resources</Heading>
                            <Button variant="ghost" color="gray.400">
                                Blog
                            </Button>
                            <Button variant="ghost" color="gray.400">
                                Documentation
                            </Button>
                            <Button variant="ghost" color="gray.400">
                                Help Center
                            </Button>
                        </VStack>
                        <VStack align="start">
                            <Heading size="md">Legal</Heading>
                            <Button variant="ghost" color="gray.400">
                                Privacy
                            </Button>
                            <Button variant="ghost" color="gray.400">
                                Terms
                            </Button>
                            <Button variant="ghost" color="gray.400">
                                Security
                            </Button>
                        </VStack>
                        <VStack align="start">
                            <Heading size="md">Connect</Heading>
                            <Button variant="ghost" color="gray.400">
                                Twitter
                            </Button>
                            <Button variant="ghost" color="gray.400">
                                LinkedIn
                            </Button>
                            <Button variant="ghost" color="gray.400">
                                GitHub
                            </Button>
                        </VStack>
                    </SimpleGrid>
                </Container>
            </Box>
        </ChakraProvider>
    );
};

export default MyChakraComponent;
