import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpended] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const description = expanded
    ? children
    : children.substring(0, limit) + "...";
  return (
    <Text>
      {description}
      <Button
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpended(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
