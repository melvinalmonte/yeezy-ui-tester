import {
  Avatar,
  Button,
  Center,
  Container,
  HStack,
  Skeleton,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { quoteGenerator } from "./features/quotes/quoteSlice";
import { RootState } from "./store";
import pic1 from "./static/sticker_1.png";
import pic2 from "./static/sticker_2.png";
import pic4 from "./static/sticker_4.png";
import pic5 from "./static/sticker_5.png";
import pic6 from "./static/sticker_6.png";
import pic7 from "./static/sticker_7.png";
import pic8 from "./static/sticker_8.png";
import pic9 from "./static/sticker_9.png";
import pic10 from "./static/sticker_10.png";
import pic11 from "./static/sticker_11.png";
import pic12 from "./static/sticker_12.png";
import pic13 from "./static/sticker_13.png";
import pic14 from "./static/sticker_14.png";
import pic15 from "./static/sticker_15.png";
import pic16 from "./static/sticker_16.png";
import pic17 from "./static/sticker_17.png";

export const yePics = [
  pic1,
  pic2,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
];

type AppProps = {
  quote: string;
  status: string;
  error: object;
  quoteGenerator: () => void;
};

function App({ quote, status, error, quoteGenerator }: AppProps) {
  const [randomIndex, setRandomIndex] = useState(0);
  const [counter, increaseCounter] = useState(0);
  useEffect(() => {
    quoteGenerator();
    setRandomIndex(Math.floor(Math.random() * yePics.length));
  }, [counter]);
  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height="100%"
    >
      <HStack p={4} width="100%">
        <Avatar
          size="xl"
          bg="teal.500"
          name="Kanye West"
          src={yePics[randomIndex]}
        />
        <Wrap>
          <WrapItem alignItems={"center"}>
            <Skeleton isLoaded={status !== "pending"}>
              <Text>"{quote}"</Text>
            </Skeleton>
          </WrapItem>
        </Wrap>
      </HStack>
      <Center>
        <Button
          borderRadius={"full"}
          onClick={() => increaseCounter(counter + 1)}
        >
          Get new quote
        </Button>
      </Center>
    </Container>
  );
}

const mapStateToProps = (state: RootState) => {
  const { kanye } = state;
  return {
    quote: kanye.quote,
    status: kanye.status,
    error: kanye.error,
  };
};

const mapDispatchToProps = {
  quoteGenerator,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
