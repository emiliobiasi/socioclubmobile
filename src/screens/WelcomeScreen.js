import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";


const { width, height } = Dimensions.get("window");

const slides = [
  {
    key: "1",
    title: "Conecte-se ao seu Clube",
    subtitle: "Aproxime-se mais do clube do seu coração",
    image: require("../../assets/images/socioclublogo.png"), // Substitua pelo caminho correto da sua imagem
  },
  {
    key: "2",
    title: "Viva a Paixão do Futebol",
    subtitle: "Seu Clube, Sua Paixão",
    image: require("../../assets/images/socioclubsand.png"), // Substitua pelo caminho correto da sua imagem
  },
  {
    key: "3",
    title: "Exclusividade SocioClub",
    subtitle: "Siga as novidades, compre ingressos e produtos exclusivos",
    image: require("../../assets/images/socioclublogoandtext1.png"), // Substitua pelo caminho correto da sua imagem
  },
];

const WelcomeScreen = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef();

  const onScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setActiveSlide(roundIndex);
  };

  const onNextPress = () => {
    if (activeSlide < slides.length - 1) {
      scrollViewRef.current.scrollTo({
        x: width * (activeSlide + 1),
        animated: true,
      });
    } else {
      navigation.navigate('ChooseSign');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        ref={scrollViewRef}
      >
        {slides.map((slide) => (
          <View key={slide.key} style={[styles.slide, { width }]}>
            <Image source={slide.image} style={styles.logo} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.subtitle}>{slide.subtitle}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.indicatorContainer}>
          {slides.map((slide, index) => (
            <View
              key={slide.key}
              style={[
                styles.indicator,
                activeSlide === index && styles.indicatorActive,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={onNextPress}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202B", // Fundo escuro da tela inteira
  },
  slide: {
    width: width, // Cada slide ocupa a largura total da tela
    alignItems: "center",
    justifyContent: "space-around", // Distribui o espaço verticalmente
  },
  logo: {
    width: 300, // Tamanho do logotipo
    height: 300, // Tamanho do logotipo
    resizeMode: "contain", // Assegura que o logotipo não seja cortado
  },
  textContainer: {
    // Defina a altura para ajustar o conteúdo interno se necessário
    marginTop: -100,
    width: "100%",
    height: 350,
    alignItems: "center",
    justifyContent: "flex-start", // Alinha os itens ao topo
    paddingHorizontal: 20, // Espaço horizontal interno
    backgroundColor: "#253341",
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
  },
  title: {
    color: "#fff", // Texto branco
    fontSize: 40, // Tamanho do texto grande para o título
    fontWeight: "bold", // Título em negrito
    textAlign: "center", // Texto centralizado horizontalmente
    marginBottom: 16, // Espaço entre o título e o subtítulo
    marginTop: "15%",
  },
  subtitle: {
    color: "#AAB8C2", // Texto branco
    fontSize: 20, // Tamanho do texto para o subtítulo
    textAlign: "center", // Texto centralizado horizontalmente
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#253341", // Fundo azul claro para a parte inferior
    paddingVertical: 20, // Espaço vertical interno
    paddingBottom: "15%",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16, // Espaço abaixo dos indicadores antes do botão
  },
  indicator: {
    height: 10, // Altura do indicador
    width: 10, // Largura do indicador
    backgroundColor: "#1C212B", // Indicadores não ativos em cinza escuro
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: "#1D9BF0", // Indicador ativo em azul claro
  },
  button: {
    backgroundColor: "#1D9BF0", // Fundo azul claro para o botão
    paddingVertical: 12, // Espaço vertical interno do botão
    paddingHorizontal: 32, // Espaço horizontal interno do botão
    borderRadius: 12, // Borda arredondada do botão
    alignSelf: "center", // Centraliza o botão horizontalmente
    justifyContent: 'center',
    width: width - 50,
    height: 60,
  },
  buttonText: {
    color: "#fff", // Texto branco
    fontSize: 18, // Tamanho do texto do botão
    fontWeight: "bold", // Texto do botão em negrito
    textAlign: "center", // Texto do botão centralizado
  },
})
export default WelcomeScreen;
