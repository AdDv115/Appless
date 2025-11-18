import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";
import estilos from "./Estilos/Estilos";
import { Picker } from "@react-native-picker/picker";

export default function Registro() {

const [Usuario, setUsuario] = useState('')
const [Correo, setCorreo] = useState('')
const [Telefono, setTelefono] = useState('')
const [Contra, setContra] = useState('')
const [miembro, setMiembro] = useState('')

const Registrar = async () => {
  try {
    const response = await fetch('http://192.168.137.1:3000/crear', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Usuario: Usuario,
        Correo: Correo,
        Telefono: Telefono,
        Contra: Contra,
        Rol: miembro
      })
    });

    const mensaje = await response.text();
    Alert.alert(mensaje);

  } catch (error) {

    console.error(error);
    Alert.alert("Error al conectar con el servidor");
    console.error(error);
  }
};

  return (
   <ImageBackground source={{uri:'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
   resizeMode="cover" style={estilos.bg}>
    <View style={estilos.container}>
      <Text style={estilos.title}>REGISTRO DE USUARIO</Text>
      
      <Text style={estilos.text}>Usuario</Text>
      <TextInput
        style={estilos.textinput} value={Usuario} onChangeText={setUsuario}
      />

      <Text style={estilos.text}>Correo</Text>
      <TextInput
        style={estilos.textinput} value={Correo} onChangeText={setCorreo}
      />

      <Text style={estilos.text}>Telefono</Text>
      <TextInput
        style={estilos.textinput} value={Telefono} onChangeText={setTelefono} keyboardType="numeric"
      />

      <Text style={estilos.text}>Contraseña</Text>
      <TextInput
        style={estilos.textinput} value={Contra} onChangeText={setContra} secureTextEntry
      />

      <Picker style={estilos.picker}
        selectedValue={miembro}
        onValueChange={(itemValue) => setMiembro(itemValue)}
        >
            <Picker.Item label="Usuario" value="Usuario" />
            <Picker.Item label="Miembro" value="Miembro" />
        </Picker> 

      <TouchableOpacity style={estilos.boton} onPress={Registrar}>
        <Text style={estilos.textB}>Registrarme</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}