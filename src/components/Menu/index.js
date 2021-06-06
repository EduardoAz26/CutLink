import React from 'react';
import { View, Text } from 'react-native';
import { ButtonMenu } from './style'
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function Menu(){
    
    // Componente que faz a animação da navegação entre as páginas.
    const navigation = useNavigation();

    return(

        <View>
            <ButtonMenu onPress = { () => navigation.openDrawer() } >
                <Feather name = "menu" size = {40} color = "#FFF" />
            </ButtonMenu>
        </View>
    )
}