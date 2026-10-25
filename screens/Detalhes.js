import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function Detalhes({ route }) {
  const { receita } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: receita.strMealThumb }} style={styles.imagem} />

      <Text style={styles.titulo}>{receita.strMeal}</Text>

      <Text style={styles.subtitulo}>Categoria:</Text>
      <Text style={styles.texto}>{receita.strCategory}</Text>

      <Text style={styles.subtitulo}>Origem:</Text>
      <Text style={styles.texto}>{receita.strArea}</Text>

      <Text style={styles.subtitulo}>Modo de preparo:</Text>
      <Text style={styles.texto}>{receita.strInstructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  imagem: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#e67e22",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  texto: {
    fontSize: 16,
    marginTop: 5,
    lineHeight: 24,
    marginBottom: 10,
  },
});
