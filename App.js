import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { estilos } from './src/styleSheet/estilos';

function App() {
  let ArrayFrases = [
    'Tudo passa, nem que seja por cima de você.',
    'O segredo do sucesso é fazer o contrário do que você está fazendo.',
    'Se a vida te der limões, peça sal e tequila. Limão não paga conta.',
    'Nunca é tarde para desistir dos seus planos.',
    'O pior ainda está por vir.',
    'Fácil é fazer miojo... Viver é complicado!',
    'É só uma fase ruim, logo vai piorar.',
    'Siga seus sonhos: durma.',
    'A meta é ser humilhado, mas não desistir de passar vergonha.',
    'Acredite em si mesmo e saiba que você é um fracasso.',

  ];

  const [textoBotao, setTextoBotao] = useState('Quebrar Biscoito...');
  const [imgBiscoito, setImgBiscoito] = useState(require('./src/img/biscoito.jpg'));
  const [textoFrase, setTextoFrase] = useState('');

  function alteraStatusBiscoito() {
    let numFrase;

    if (textoBotao == "Quebrar Biscoito...") {
      
      numFrase = Math.floor(Math.random() * ArrayFrases.length);
      
      setTextoFrase('"' + ArrayFrases[numFrase] + '"');
      setTextoBotao('Nova Tentativa');
      setImgBiscoito(require('./src/img/biscoito2.png'));
    } else {
      
      setTextoBotao('Quebrar Biscoito...');
      setImgBiscoito(require('./src/img/biscoito.jpg'));
      setTextoFrase('');
    }
  }

  return (
    <View style={estilos.areaFundo}>
      <View style={estilos.areaTitulo}>
        <Text style={estilos.titulo}>App Biscoito da Sorte</Text>
      </View>

      <View style={estilos.areaImg}>
        <Image source={imgBiscoito} style={estilos.img} />
      </View>

      <View>
        <Text style={estilos.textoFrase}>{textoFrase}</Text>
        
        <TouchableOpacity style={estilos.botao} onPress={alteraStatusBiscoito}>
          <View style={estilos.areaBotao}>
            <Image 
              source={require('./src/img/estrela.png')}
              style={{ marginRight: 20, width: 40, height: 40 }} 
            />
            <Text style={estilos.textoBotao}>{textoBotao}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
