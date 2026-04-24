import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  areaFundo: {
    flex: 1,
    marginHorizontal: 10,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  areaTitulo: {
    height: 70,
    width: 380,
    backgroundColor: '#c1a4f7',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  textoFrase: {
    color: 'darkblue',
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 30,
    textAlign: 'center'
  },
  areaImg: {
    flex: 0.8,
    justifyContent: 'center'
  },
  img: {
    width: 300,
    height: 300
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#c1a4f7',
    borderRadius: 25,
    justifyContent: 'center', 
    alignItems: 'center',
    alignSelf: 'center',
  },
  areaBotao: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao: {
    fontWeight: 'bold',
    color: '#c1a4f7',
    textAlign: 'center',
  }
});

export { estilos };
