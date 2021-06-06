import React, { useState, useEffect } from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import { View, Text } from 'react-native';

import Menu from '../../components/Menu';
import StatusBarPage from '../../components/statusbarpage';
import { Container, Title, ListLinks, ContainerEmpty, WarningText } from './style';
import ListItem from '../../components/ListItem';
import { useIsFocused } from '@react-navigation/native';
import { getLinkSave, deleteLink } from '../../utils/storeLinks';
import ModalLink from '../../components/ModalLink';

// Componente da página Meus links. Lista todos os links encurtados e dá opção de exclusão.
export default function Mylinks() {
  
  const isFocused = useIsFocused();
  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {

    async function getLinks(){

      const result = await getLinkSave('Sujeitolinks');
      setLinks(result);
      setLoading(false);
    }

    getLinks();

  }, [isFocused])

  function handleItem(item){
    setData(item);
    setModalVisible(true);
  }

  async function handleDelete(id){
    const result = await deleteLink(links, id);
    setLinks(result);
  }


  return(

    <Container>
      <StatusBarPage
    
          barStyle = "light-content"
        backgroundColor = "#132742" 
      />

      <Menu/>

          <Title>Meus Links</Title>

          { loading && (
            <ContainerEmpty>
              <ActivityIndicator color= "#FFF" size = {25}/>
            </ContainerEmpty>
          ) }

          { !loading && links.length === 0 && (
            <ContainerEmpty>
              <WarningText>Você ainda não salvou nenhum link :(</WarningText>
            </ContainerEmpty>
          ) }

          <ListLinks
              data = {links}
              keyExtractor = { (item) => String(item.id) }
              renderItem = {({item}) => <ListItem data = {item} selectedItem = { handleItem } deleteItem = { handleDelete } /> }
              contentContainerStyle = {{ paddingBottom: 30 }}
              showsVerticalScrollIndicator = {false}  
          />

      <Modal visible = {modalVisible} transparent animationType = "slide">
          <ModalLink onClose = { () => setModalVisible(false) } data = {data} />
      </Modal>

    </Container>
  )
}