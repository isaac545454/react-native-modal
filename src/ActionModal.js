
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export function ActionModal({handle, edit, handledelete}){

    return (
      <SafeAreaView style={styles.container} >
        <TouchableOpacity style={styles.exit} onPress={handle}></TouchableOpacity>
        <View style={styles.content}>
            <TouchableOpacity
                style={styles.actionButton}
                onPress={edit}
            >
                <Text style={styles.actionText}>
                    editar
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={styles.actionButton}
                onPress={handledelete}
            >
                <Text style={[styles.actionText, styles.red]}>
                    excluir
                </Text>

            </TouchableOpacity>

        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    exit: {
        flex:1,
        zIndex: 9
    },
    content: {
        marginVertical: 20,
        marginLeft: 10,
        marginRight: 10, 
    },
    actionButton: {
        zIndex: 99,
        backgroundColor: "#fff",
        borderRadius: 6,
        marginTop: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOFFset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
        shadowOpacity: 0.28,
        shadowRadius: 4,
    },
    actionText: {
        textAlign: "center",
        fontWeight: "bold"
    },
    red: {
        color: "red"
    }
})