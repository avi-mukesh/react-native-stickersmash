import { View, Text } from "react-native";
import React from "react";
import { Image, ImageSource } from "expo-image";

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
