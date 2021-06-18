import React, { useState }from 'react';
import { View, Text, TextInput, Button } from 'react-native'
import ResultImc from './Result'

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
        <View>
            <View>

                <Text>Qual sua altura?</Text>
                <TextInput
                    onChangeText={setAltura}
                    value = {altura}
                    placeholder = "Ex: 1.75"
                    keyboardType = "numeric"
                />

                <Text>Qual seu peso?</Text>
                <TextInput
                    onChangeText={setPeso}
                    value = {peso}
                    placeholder = "Ex: 80.65"
                    keyboardType = "numeric"
                />
                <Button
                    onPress={() => validacao()}                 
                    title={textButton}
                />
            </View>
            <ResultImc messageResultImc = {messageImc} resultImc = {imc}/>
        </View>
    );
}