import AsyncStorage from '@react-native-async-storage/async-storage';

// Buscar os links salvos.
export async function getLinkSave(key){

    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}

// Salvar link no storage.
export async function saveLink(key, newLink){

    let linkStored = await getLinkSave(key);

    // Ignorar link duplicado ou salvo com mesmo id.
    const haslink = linkStored.some( link => link.id === newLink.id );

        if(haslink){
            console.log('Esse link já existe na lista.');
            return;
        }
        
        linkStored.push(newLink);
        await AsyncStorage.setItem(key, JSON.stringify(linkStored));
        console.log('Link salvo com sucesso!');
}

// Deletar algum link.
export async function deleteLink(links, id){

    let myLinks = links.filter( (item) => {

        return (item.id !== id)
    })

    await AsyncStorage.setItem('Sujeitolinks', JSON.stringify(myLinks));

    console.log('Link deletado!');

    return myLinks;
}