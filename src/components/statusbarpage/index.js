import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

// Função que retorna a cor de fundo do app de acordo com a guia escolhida.
function StatusBarPage(props){

    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}

export default StatusBarPage;
