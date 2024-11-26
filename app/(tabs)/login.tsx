import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {Checkbox} from "@/components/ui/Checkbox";

export default function LoginScreen() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#121223', dark: '#121223' }}
            headerImage={
                <ThemedView style={styles.headerContainer}>
                    <Image
                        source={require('@/assets/images/motif1.png')}
                        style={styles.motif1}
                    />
                    <View style={styles.headerContent}>
                        <ThemedText style={styles.headerTitle}>Log In</ThemedText>
                        <ThemedText style={styles.headerSubtitle}>
                            Please sign in to your existing account
                        </ThemedText>
                    </View>
                    <Image
                        source={require('@/assets/images/motif2.png')}
                        style={styles.motif2}
                    />
                </ThemedView>
            }
        >
            <ThemedView style={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>EMAIL</ThemedText>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>PASSWORD</ThemedText>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={[styles.input, styles.passwordInput]}
                            placeholder="Enter your password"
                            secureTextEntry={!showPassword}
                            textContentType="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>
                </View>

                <View style={styles.rememberContainer}>
                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            checked={rememberMe}
                            onValueChange={setRememberMe}
                        />
                        <ThemedText style={styles.rememberText}>Remember me</ThemedText>
                    </View>
                    <TouchableOpacity>
                        <ThemedText style={styles.forgotPassword}>Forgot Password</ThemedText>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton}>
                    <ThemedText style={styles.loginButtonText}>LOG IN</ThemedText>
                </TouchableOpacity>

                <View style={styles.signupContainer}>
                    <ThemedText style={styles.signupText}>Don't have an account? </ThemedText>
                    <TouchableOpacity>
                        <ThemedText style={styles.signupLink}>SIGN UP</ThemedText>
                    </TouchableOpacity>
                </View>

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <ThemedText style={styles.dividerText}>Or</ThemedText>
                    <View style={styles.divider} />
                </View>

                <View style={styles.socialContainer}>
                    <TouchableOpacity style={[styles.socialButton, styles.gmail]}>
                        <Image
                            source={require('@/assets/images/gmail.png')}
                            style={[styles.socialIcon, { width: 54, height: 54 }]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialButton, styles.apple]}>
                        <Image
                            source={require('@/assets/images/apple.png')}
                            style={[styles.socialIcon, { tintColor: '#F5F5F5', width: 43, height: 44 }]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121223',
    },
    headerContent: {
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#FFFFFF',
        opacity: 0.8,
    },
    motif1: {
        position: 'absolute',
        top: -50,
        left: -50,
        width: 130,
        height: 130,
    },
    motif2: {
        position: 'absolute',
        top: 0,
        right: -80,
        width: 200,
        height: 250,
    },
    formContainer: {
        padding: 34,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    inputGroup: {
        marginBottom: 24,
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 8,
        color: '#333',
    },
    input: {
        height: 48,
        backgroundColor: '#F5F6FA',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
    },
    passwordContainer: {
        position: 'relative',
    },
    passwordInput: {
        paddingRight: 48,
    },
    eyeIcon: {
        position: 'absolute',
        right: 16,
        top: 14,
    },
    rememberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rememberText: {
        marginLeft: 8,
        color: '#666',
    },
    forgotPassword: {
        color: '#F4804F',
    },
    loginButton: {
        backgroundColor: '#F4804F',
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    signupText: {
        color: '#666',
    },
    signupLink: {
        color: '#F4804F',
        fontWeight: '600',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E5E5',
    },
    dividerText: {
        marginHorizontal: 16,
        color: '#666',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    },
    socialButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gmail: {
        backgroundColor: '#dcdcdc',
    },
    apple: {
        backgroundColor: '#000000',
    },
    socialIcon: {
        justifyContent: 'center',
        alignItems: 'center',

    },
});

