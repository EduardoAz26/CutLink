import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Mylinks from './pages/Mylinks';

// Importa ícones.
import { Ionicons } from '@expo/vector-icons';

// Configuração das rotas.
const Drawer = createDrawerNavigator();

  function Routes(){

    return(
        
        //Telas que serão renderizadas quando os componentes são chamados. 
        <Drawer.Navigator drawerContentOptions = {{ 
            
            // Estilização das guias de navegação. 
            activeBackgroundColor: '#2ccbb9',
            activeTintColor: '#FFF',
            marginTop: 16,
            labelStyle: {
               fontSize: 19,
            }
           }
          }
        > 
        
          <Drawer.Screen name = "Home" component = {Home} options = {{

              title: 'Encurtar Link',
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons 
                  name = {focused ? 'cube' : 'cube-outline'}
                  color = {color}
                  size = {size}
                   />
              )
            }
          }
        /> 

          <Drawer.Screen name = "Mylinks" component = {Mylinks} options = {{

              title: 'Meus Links',
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons 
                  name = {focused ? 'stats-chart' : 'stats-chart-outline'}
                  color = {color}
                  size = {size}
                   />
              )
            }
          }
        />

        </Drawer.Navigator>
    )
  }

// Comando para exportar e importar no App.js  
export default Routes;

