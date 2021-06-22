import React, { useState }from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import ResultImc from './Result'
import styles from './style';

export default function Form(props) {

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha a altura e o peso")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function calculaImc(){

        return setImc((peso/(altura*altura)) .toFixed(2))
    }
    function validacao(){
        if(peso != null && altura != null)
        {
            calculaImc()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu Imc é: ")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha a altura e o peso")
    }

    return (
        <View style = {styles.formContext}>
            <View style = {styles.form}>

                <Text style={styles.formLabel}>Qual sua altura?</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setAltura}
                    value = {altura}
                    placeholder = "Ex: 1.75"
                    keyboardType = "numeric"
                />

                <Text style={styles.formLabel}>Qual seu peso?</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPeso}
                    value = {peso}
                    placeholder = "Ex: 80.65"
                    keyboardType = "numeric"
                />
                <TouchableOpacity
                    onPress={()=> validacao()}
                    style={styles.buttonCalculator}
                >
                    <Text style={styles.textButton}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc = {messageImc} resultImc = {imc}/>
        </View>
    );
}