import React from "react";
import { View,Text, TouchableOpacity,FlatList,TextInput } from "react-native";
import estilos from "./Estilos/Estilos";
import RenderItem from "./RenderItem";


const task=[
    {
        title:'Alimentar al brayan',
        done:false,
        date:new Date()
    },
    {
        title:'Bañar al brayan',
        done:true,
        date:new Date()
    },
    {
        title:'Querer al brayan',
        done:false,
        date:new Date()
    }
]
export interface Task{
    title:string,
    done:boolean,
    date:Date
}

export default function Tablero(){
    const markDone = () => {
    console.log("Tarea marcada como hecha");
  };

  const deleteFunction = () => {
    console.log("Tarea eliminada");
  };
    return(
        <View style={estilos.container}>
            <Text style={estilos.title}>Hola</Text>
            <View style={estilos.inputcontainer}>
            <TextInput placeholder="Escriba" style={estilos.textinput}></TextInput>
            <TouchableOpacity style={estilos.boton}>
                <Text>Agregar</Text>
            </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    renderItem={({ item }) => (
                    <RenderItem
                        item={item}
                        markDone={markDone}
                        deleteFunction={deleteFunction}
                    />
                )}
                 data={task}
                />
            </View>
        </View>
    )
}