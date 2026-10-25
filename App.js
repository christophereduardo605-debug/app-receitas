import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Detalhes from "./screens/Detalhes";

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  const [receitas, setReceitas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    buscarReceitas();
  }, []);

  async function buscarReceitas() {
    try {
      const resposta = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=",
      );
      setReceitas(resposta.data.meals || []);
    } catch (erro) {
      console.log("Erro ao buscar receitas:", erro);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Receitas</Text>

      {carregando ? (
        <ActivityIndicator size="large" color="#e67e22" />
      ) : (
        <FlatList
          data={receitas}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Detalhes", { receita: item })}
            >
              <Image
                source={{ uri: item.strMealThumb }}
                style={styles.imagem}
              />
              <Text style={styles.nome}>{item.strMeal}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Receitas" }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{ title: "Detalhes da Receita" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#e67e22",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginBottom: 12,
    borderRadius: 10,
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  nome: {
    fontSize: 16,
    flex: 1,
  },
});
