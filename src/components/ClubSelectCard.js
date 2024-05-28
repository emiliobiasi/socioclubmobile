import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useClub } from "../context/ClubContext";
import { useUser } from "../context/UserContext";

const { width, height } = Dimensions.get("window");

const ClubSelectCard = ({ club, navigation }) => {
  const { userInfo, updateUserInfo } = useUser();
  const { updateClubInfo } = useClub();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const navigateToMain = () => {
    updateClubInfo(club);
    setModalVisible(false);
    navigation.navigate("Main");
  };
  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={openModal}>
        <ImageBackground
          source={{ uri: club.background }} // Imagem de fundo do card
          style={styles.imageBackground} // Estilo da imagem de fundo
          imageStyle={styles.imageStyle} // Estilo para manter a borda do card
        >
          <Image
            source={{ uri: club.logo }} // Ícone do clube (circular)
            style={styles.iconImage} // Estilo para a imagem do ícone
          />
          <Text style={styles.title}>{club.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true} // Fundo do modal translúcido
        animationType="slide" // Animação do modal
        onRequestClose={closeModal} // Fecha o modal ao pressionar fora
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <ImageBackground
                  source={{ uri: club.background }} // Usa a mesma imagem de fundo do card
                  style={styles.modalImageBackground}
                  imageStyle={styles.modalImageStyle}
                >
                  <Image
                    source={{ uri: club.logo }} // Ícone centralizado
                    style={styles.modalIconImage}
                  />
                  <Text style={styles.modalTitle}>{club.name}</Text>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={navigateToMain}
                  >
                    <Text style={styles.modalButtonText}>Ver Clube</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 2.4, // Largura do card
    height: 150, // Altura do card
    borderRadius: 15, // Borda arredondada para o card
    overflow: "hidden", // Garante que a imagem de fundo não saia do card
    backgroundColor: "#253341", // Cor de fundo do card
    marginVertical: 10,
  },
  imageBackground: {
    flex: 1, // Preenche todo o card
    alignItems: "center", // Centraliza horizontalmente
    height: "60%",
  },
  imageStyle: {
    borderRadius: 0, // Mantém a borda arredondada para a imagem de fundo
  },
  iconImage: {
    width: 80, // Tamanho da imagem do ícone
    height: 80, // Tamanho da imagem do ícone
    borderRadius: 40, // Tornar a imagem redonda
    borderWidth: 2, // Borda ao redor do ícone
    borderColor: "#fff", // Cor da borda
    marginTop: 20,
  },
  title: {
    color: "#fff", // Cor do texto
    fontSize: 18, // Tamanho do texto para destaque
    fontWeight: "bold", // Negrito para ênfase
    position: "absolute", // Mantém o texto na parte inferior
    bottom: 15, // Espaçamento a partir da parte inferior do card
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo translúcido
  },
  modalContent: {
    width: "75%",
    backgroundColor: "#253341",
    borderRadius: 15,
    height: 380,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#1D9BF0",
    justifyContent: "center",
    borderRadius: 12,
    width: "40%",
    height: 60,
    alignItems: "center",
    alignSelf: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalImageBackground: {
    height: "40%",
  },
  modalImageStyle: {
    height: "100%",
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  modalIconImage: {
    width: 120, // Tamanho da imagem do ícone
    height: 120, // Tamanho da imagem do ícone
    borderRadius: 80, // Tornar a imagem redonda
    borderWidth: 2, // Borda ao redor do ícone
    borderColor: "#fff", // Cor da borda
    marginTop: 80,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default ClubSelectCard;
