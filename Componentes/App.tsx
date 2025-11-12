import React from "react";
import Inicio from "./cLogin";
import Tablero from "./Tablero";
import Registro from "./cRegistro";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"

export type RootStackParamList = {
    Inicio:undefined
    Table:undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen name="Table" component={Tablero} />
                <Stack.Screen name="Inicio" component={Inicio} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}