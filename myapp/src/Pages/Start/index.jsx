import React from "react";

/* ======= Start ======= */
export default function Start(){
    return (
        <View>
            <ScrollView showVerticalScrollIndicator={false}>
                <View>
                    <Image 
                        source={require("../../assets/icons/logo3.png")}
                    />
                    <Text>
                        Vamos transformar sua vida {"/n"} em jogo
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}















