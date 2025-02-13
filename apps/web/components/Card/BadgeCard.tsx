import { Text } from "@mantine/core";

/**
 * Badge Card Component.
 * @param {{ text: string }} props
 * @return {JSX.Element | null}
 */
export default function BadgeCard({
  text,
}: {
  text: string;
}): JSX.Element | null {
  return text ? (
    <Text
      component="span"
      px={6}
      py={4}
      bg="#4C93FF"
      color="white"
      pos="absolute"
      top={0}
      right={0}
      size={10}
      weight="bold"
      sx={{ lineHeight: 1, zIndex: 3, borderLeft: "8px" }}
    >
      {text}
    </Text>
  ) : null;
}
