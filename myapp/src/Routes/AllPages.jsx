import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import AppExplanation from '../Pages/AppExplanation';
import Start from '../Pages/Start';

const Stack = createNativeStackNavigator();

/* ======= AllPages ======= */
export default function AllPages(){
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="AppExplanation" component={AppExplanation} />
                <Stack.Screen name="Start" component={Start} />
            </Stack.Navigator> 
        </NavigationContainer>
    );
}










