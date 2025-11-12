import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import estilos from "./Estilos/Estilos";
import { Picker } from "@react-native-picker/picker";

export default function Registro() {

const [miembro, setMiembro] = useState('')

  return (
   <ImageBackground source={{uri:'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
   resizeMode="cover" style={estilos.bg}>
    <View style={estilos.container}>
      <Text style={estilos.title}>REGISTRO DE USUARIO</Text>
      
      <Text style={estilos.text}>Usuario</Text>
      <TextInput
        style={estilos.textinput}
      />

      <Text style={estilos.text}>Correo</Text>
      <TextInput
        style={estilos.textinput}
      />

      <Text style={estilos.text}>Telefono</Text>
      <TextInput
        style={estilos.textinput}
      />

      <Text style={estilos.text}>Contraseña</Text>
      <TextInput
        style={estilos.textinput}
      />

      <Picker style={estilos.picker}
        selectedValue={miembro}
        onValueChange={(itemValue) => setMiembro(itemValue)}
        >
            <Picker.Item label="Usuario" value="Usuario" />
            <Picker.Item label="Miembro" value="Miembro" />
        </Picker> 

      <TouchableOpacity style={estilos.boton}>
        <Text style={estilos.textB}>Registrarme</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}