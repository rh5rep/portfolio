import { Text, Flex, Heading, HStack, IconButton } from "@chakra-ui/react";
import { Divider, Spacer, VStack, Box } from "@chakra-ui/layout";
import Link from "next/link";
import { EmailIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";
import Layout from "../components/layout";

export default function Heartrate({ Component, pageProps }) {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <VStack>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Flex m={'5%'}>
                <VStack>

                    <Heading>
                        Extracting Heart rate from Cell Phone Videos Using
                        Fast Fourier Transform (FFT) and Blind Source
                        Separation (BSS) with Active Face Tracking using
                        MATLAB
                    </Heading>
                    <Divider></Divider>
                    {/* <Text >
                        In the medical field, there are times when normal contact-based measurements are not ideal due to contamination or other factors that can affect readings. This paper presents the results from research and implementation of a contactless method for measuring heart rate using video from a cell phone camera. The method incorporates a face tracking algorithm to enhance system robustness. The accuracy of the algorithm is evaluated by comparing the measured heart rates with reference heart rates taken simultaneously with the video samples. The study demonstrates the feasibility of contactless heart rate measurement using video-based techniques, providing a potential alternative to conventional contact-based methods in certain scenarios.
                    </Text> */}
                    <Text align={'center'}>
                        For this project, I took the lead in developing the majority of the MATLAB code, leveraging essential tools such as the Computer Vision Toolbox, Signal Processing Toolbox, and PCA and ICA Data Package. I also played a significant role in crafting the PowerPoint presentation and conducting thorough data analysis. While my partner primarily focused on writing the research paper, both the presentation and research paper are seamlessly embedded on this page. For a closer look at the MATLAB scripts used in this project, you can find them conveniently located in the appendix of the research paper.
                    </Text>
                    <Spacer></Spacer>
                    <Text>
                        Below, you can see a video of the program, followed by the research paper, followed by the powerpoint.
                    </Text>
                </VStack>
            </Flex>
            <iframe
                src="../images/heartrate.mp4"
                width="90%"
                height="600px"
                style={{ border: "none", borderRadius: "1rem" }}
            />


            <iframe
                src="../pdfs/FinalFinalDSPProject.pdf"
                width="90%"
                height="600px"
                style={{ border: "none", borderRadius: "1rem" }}
            />
            <Divider />
            <iframe
                src="../pdfs/FinalDSPProject.pdf"
                width="90%"
                height="600px"
                style={{ border: "none", borderRadius: "1rem" }}
            />
        </VStack>
    );
}
