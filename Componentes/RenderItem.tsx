import estilos from "./Estilos/Estilos";
import { View,
        Text,
        TouchableOpacity} from 'react-native';
import { Task } from "../Componentes/Tablero";
interface ItemProps{
    item:Task,
    markDone:(task:Task)=>void,
    deleteFuntion:(task:Task)=>void
}
export default function RenderItem({item, markDone, deleteFuntion}:ItemProps){
    return (
        <View style={estilos.itemcontainer}>
            <TouchableOpacity onPress={()=>markDone(item)}>
                <Text style={item.done ? estilos.textDone:estilos.text}>{item.title}</Text>
                <Text>{new Date(item.date).toDateString()}</Text>
            </TouchableOpacity>
            {
                item.done &&
                (<TouchableOpacity 
                style={estilos.removeBoton}
                onPress={()=>deleteFuntion(item)}>
                    <Text>
                        Eliminar
                    </Text>
                </TouchableOpacity>)
            }
        </View>
    )
}

// DateTimePicker