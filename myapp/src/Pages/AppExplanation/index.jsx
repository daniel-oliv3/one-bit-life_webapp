import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native-gesture-handler";


/* ======= AppExplanation ======= */
export default function AppExplanation(){

    function handleSetShowHome(){
        
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>
                        Antes, deixa {"\n"} eu te explicar...
                    </Text>
                    <Text style={styles.descriptionCta}>
                        Pronto(a) para subir de nível na vida?
                    </Text>
                    <Text style={styles.description}>
                        Na próxima tela você pode escolher {"\n"} seus 4 hábitos de forma individual...
                    </Text>
                    <DefaultButton 
                        buttonText={"Continuar"}
                        handlePress={handleSetShowHome}
                        width={250}
                        height={50}
                    />
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginVertical: 40,
    },
    descriptionCta: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        color: "white",
        textAlign: "center",
        marginBottom: 30,
    },
});
