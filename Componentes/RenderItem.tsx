import estilos from "./Estilos/Estilos";
import { View,Text, TouchableOpacity } from "react-native";
import {Task} from "./Tablero"
interface Itemprops{
    item:Task,
    markDone:()=>void,
    deleteFunction:()=>void
}
export default function RenderItem({item,markDone,deleteFunction}:Itemprops){
    return(
        <View style={estilos.itemcontainer}>
            <TouchableOpacity onPress={markDone}>
             <Text style={item.done ? estilos.textDone:estilos.text}>{item.title}</Text>
             <Text>{item.date.toDateString()}</Text>
             </TouchableOpacity>{
                item.done &&
                (<TouchableOpacity
                 style={estilos.removeBoton}
                 onPress={deleteFunction}>
                    <Text>
                        Eliminar
                    </Text>
                </TouchableOpacity>)
             }
        </View>
    )
}

