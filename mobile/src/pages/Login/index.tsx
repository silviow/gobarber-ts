import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Image,
    View,
} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
    Container,
    Title,
    ForgotPasswordLink,
    CreateAccountLink,
} from './styles';
import logoImg from '../../assets/logo.png';
import BackgroundText from '../../components/BackgroundText';

const Login: React.FC = () => {
    return (
        <KeyboardAvoidingView
            enabled
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={{ minHeight: '100%' }}
                keyboardShouldPersistTaps="handled"
            >
                <Container>
                    <Image source={logoImg} style={{ zIndex: 2 }} />
                    <BackgroundText />
                    <View>
                        <Title>Welcome</Title>
                    </View>
                    <Input name="email" icon="mail" placeholder="Email" />
                    <Input name="password" icon="lock" placeholder="Password" />
                    <Button
                        onPress={(): void => {
                            console.log('"Login" pressed');
                        }}
                    >
                        Login
                    </Button>
                    <ForgotPasswordLink
                        fontSize="17px"
                        onPress={(): void => {
                            console.log('"I forgot my password" pressed');
                        }}
                    >
                        I forgot my password
                    </ForgotPasswordLink>
                    <CreateAccountLink
                        icon="log-in"
                        color="#fff"
                        fontSize="19px"
                        onPress={(): void => {
                            console.log('"Create an account" pressed');
                        }}
                    >
                        Create an account
                    </CreateAccountLink>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;
