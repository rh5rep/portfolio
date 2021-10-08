import { Text, Flex, Heading, HStack, IconButton } from "@chakra-ui/react";
import { Divider, Spacer, VStack } from "@chakra-ui/layout";
import Link from "next/link";
import { FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";

export default function Resume() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p="1">
      <Flex w="100%">
        {/* <Heading ml="1" size="small" fontWeight="semibold" color="cyan.400">
          <Text p="0" align="center">
            {" "}
            | (603) 293-3511 |
          </Text>
          <Text p="0" align="center">
            {" "}
            | hannar1@wit.edu |
          </Text>
        </Heading> */}
        <Spacer></Spacer>
        <Link href="mailto:hannar1@wit.edu" isExternal>
          <IconButton ml="1" mr="1" icon={<EmailIcon />} isRound="true">
            {" "}
          </IconButton>
        </Link>
        <Link href="https://www.linkedin.com/in/ramiihanna/" isExternal>
          <IconButton ml="1" icon={<FaLinkedin />} isRound="true">
            {" "}
          </IconButton>
        </Link>

        <IconButton
          ml="1"
          mr="1"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Spacer></Spacer>
      <Divider></Divider>
      <Flex>
        <HStack>
          <Text
            fontWeight="bold"
            fontSize="xl"
            fontFamily="serif"
            align="Center"
            p="2"
            color="cyan.400"
            transform="-90"
          >
            Main Focus:
          </Text>
          <Divider orientation="vertical"></Divider>
          <Text p="2" fontFamily="serif">
            A creative, observant, and self-driven team player always striving
            to learn and contribute insightful solutions to challenging
            problems. Eager to expand my knowledge in robotics, mechanical and
            electrical engineering, and computer science seeking a unique
            opportunity for January to April 2022.
          </Text>
        </HStack>
      </Flex>
      <Divider></Divider>
      <Flex>
        <HStack p="2">
          <Text
            fontWeight="bold"
            fontSize="xl"
            fontFamily="serif"
            align="Center"
            p="2"
            color="cyan.400"
          >
            EDUCATION:
          </Text>
          <Divider orientation="vertical"></Divider>
          <Text
            fontWeight="bold"
            fontSize="lg"
            fontFamily="serif"
            align="Center"
            p="2"
            color="cyan.400"
          >
            Wentworth Institute of Technology
          </Text>
          <Divider orientation="vertical"></Divider>
          <VStack>
            <Text>
              Electromechanical Engineering, Minor in Computer Science. | GPA:
              3.97/4.00 Interdisciplinary degree with a focus on mechanical
              engineering, electrical engineering, electromechanical systems
              (ABET accredited)
            </Text>
            <Divider></Divider>
            <Text>
              Memberships: Institute of Electrical and Electronic Engineers
              (IEEE), Remotely Operated Vehicles (ROV), Robotics, Accelerate
            </Text>
            <Divider></Divider>
            <Text>
              Relevant Courses: Analog Circuit Design, Signals and Systems,
              Mechanics of Materials, Thermodynamics, Computer Science 1, MATLAB
            </Text>
          </VStack>
        </HStack>
      </Flex>
      <Divider></Divider>
    </VStack>
    // <Text>
    //   Main Focus: A creative, observant, and self-driven team player always
    //   striving to learn and contribute insightful solutions to challenging
    //   problems. Eager to expand my knowledge in robotics, mechanical and
    //   electrical engineering, and computer science seeking a unique opportunity
    //   for January to April 2022. EDUCATION Wentworth Institute of Technology |
    //   Boston, MA B.S. Electromechanical Engineering, Minor in Computer Science.
    //   | GPA: 3.97/4.00 Interdisciplinary degree with a focus on mechanical
    //   engineering, electrical engineering, electromechanical systems (ABET
    //   accredited) Memberships: Institute of Electrical and Electronic Engineers
    //   (IEEE), Remotely Operated Vehicles (ROV), Robotics, Accelerate Relevant
    //   Courses: Analog Circuit Design, Signals and Systems, Mechanics of
    //   Materials, Thermodynamics, Computer Science 1, MATLAB PROFESSIONAL
    //   EXPERIENCE DEKA Research and Development Controls Intern April 2019 -
    //   Sept. 2019 | June 2020 – July 2021 Manchester, NH ● Responsible for
    //   designing and running multiple electrical, mechanical (impact and thermal)
    //   tests on biomedical devices. ● Worked directly under lead Controls
    //   engineer to design and implement a PID controlled heating and cooling
    //   system to operate safely and efficiently via Modbus TCP/IP and LabVIEW. ●
    //   Designed an RFID organization system via Modbus TCP/IP and LabVIEW to
    //   track and manage subsystem components. ○ Integrated this system to work
    //   with Python and SQL for Batch Production Records. ● Led effort to create a
    //   versatile test bench that streamlines multi-source serial data
    //   autonomously using Arduino and Python. ● Assisted in testing System-level
    //   FDA requirements, analyzing results, and giving feedback for improving
    //   anomalous behavior: ○ This feedback loop allowed for constant operating
    //   procedure improvements to increase quality of output data. ● Engaged in
    //   subsystem-level requirements meetings to brainstorm new test methods.
    //   Dry-ran informal procedures for initial verification of test methods. ●
    //   Received formal training on Electro-static discharge, good documentation
    //   practices and Scale Lab Operations (Precision Scales, Environmental
    //   Chambers, Pressure Gauges, Temperature Loggers). ● Accepted greater
    //   responsibility that was quickly given to me after demonstrating
    //   understanding and capability to contribute high quality outputs. FIRST
    //   Robotics Intern March 2019 - June 2019 Manchester, NH • Designed and
    //   assembled baseline robots for FIRST demonstration events. Created
    //   long-term solutions at competitive costs. • Modeled 3D printed hardstops,
    //   which were dynamic enough to be used with different robot models over
    //   years. • Contributed to source-controlled software suite, ensuring new
    //   updates did not conflict within teams. SKILLS ● Trilingual (English &
    //   Arabic, conversational Spanish) ● SOLIDWORKS CSWA ● 3D Printing ● Java,
    //   Python, MATLAB, LabVIEW, C, C++ ● Arduino, Raspberry Pi ● Windows, Linux,
    //   Android ● Git and Surround version control ● General electrical wiring ●
    //   AC/DC electrical circuitry and diagrams ● Soldering ● Program and
    //   electrical debugging ● Statics and dynamics calculations ● Simple machine
    //   work ● Public speaking RELEVANT ACTIVITIES & PROJECTS Turnafit Project
    //   Sept. 2018 – May 2021 ● Developed a biomedical device to efficiently
    //   decrease blood loss on the way to a hospital by using inflation mechanisms
    //   and blood clotting technologies ● Researched and designed prototypes which
    //   were presented in front of EMTs, patent lawyers, and entrepreneurs to
    //   receive feedback. Robotics - FRC Team 5813 “Morpheus” June 2017 - May 2019
    //   ● Worked with senior engineers and college mentors: designing, building,
    //   and testing software, electrical, and mechanical subsystems. ● Programmed
    //   telemetry commands for the robot. ● Used PixyCam to help the robot
    //   autonomously track its target. ○ Won a “Design and Innovation award” for
    //   this program. ● Mentored team Java proficiency and provide continued
    //   assistance with the development of the robot.
    // </Text>
  );
}
