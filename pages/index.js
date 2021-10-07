import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  VStack,
  HStack,
  Flex,
  Heading,
  Text,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { Link as chakraLink } from "@chakra-ui/layout";
import { FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import fav from "C:\\Users\\hannar1\\next-portfolio\\public\\temppic.png";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <VStack p="1">
        <Flex w="100%">
          <Heading ml="1" size="small" fontWeight="semibold" color="cyan.400">
            <Text p="0" align="center">
              {" "}
              | (603) 293-3511 |
            </Text>
            <Text p="0" align="center">
              {" "}
              | hannar1@wit.edu |
            </Text>
          </Heading>
          <Spacer></Spacer>
          <a href="mailto:hannar1@wit.edu" target="_blank" rel="noreferrer">
            <IconButton ml="1" mr="1" icon={<EmailIcon />} isRound={true}>
              {" "}
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/ramiihanna/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton ml="1" icon={<FaLinkedin />} isRound="true">
              {" "}
            </IconButton>
          </a>

          <IconButton
            ml="1"
            mr="1"
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
      </VStack>
      <div className={styles.container}>
        <main className={styles.main}>
          {/* <h1 className={styles.title}>Hi, my name is Rami Hanna.</h1> */}
          <Heading>
            <Flex>
              <HStack>
                <Text
                  bgGradient="linear(to-r, cyan.400, #9448BC)"
                  border="HighlightText"
                  borderRadius="5"
                  bgClip="text"
                  fontSize="xxx-large"
                  fontWeight="extrabold"
                  p="5"
                  align="center"
                >
                  Hello, I am Rami Hanna.
                </Text>
                <Image
                  src={fav}
                  width="100%"
                  height="100%"
                  // layout="responsive"
                />
              </HStack>
            </Flex>
          </Heading>

          <p className={styles.description}>Welcome to my website.</p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
            <Link href="/test">
              <a>Test</a>
            </Link>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}
