import { StyleSheet } from 'react-native';
import { dimension } from '../../Themes';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    logo: {
        width: dimension.screen.width / 5 * 3,
        resizeMode: 'contain'
    },
    input: {
        height: 50,
        width: dimension.screen.width / 6* 5,
        backgroundColor: '#99FFCC',
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 60
    },
    button: {
        height: 50,
        width: dimension.screen.width / 7 * 5,
        backgroundColor: '#6666FF',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    textButton: {
        color: '#00DD00',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default styles;