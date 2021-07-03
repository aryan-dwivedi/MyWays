import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 5,
    height: 250,
    width: 240,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  innerContainer: {
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  addToFavourites: {
    position: 'absolute',
    right: 35,
    top: 7,
    zIndex: 20,
  },
  image: {
    height: "85%",
    aspectRatio: 16/9,
    resizeMode: "cover",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  Rating: {
    fontSize: 15,
  }
});

export default styles;
