import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  placeholder: ImageSource;
  selectedImage?: string;
};

export default function ImageViewer({ placeholder, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholder;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
