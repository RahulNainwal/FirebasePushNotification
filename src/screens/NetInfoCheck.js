import React from 'react'
import { Dimensions, Platform } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import styled from 'styled-components'


const MainView = styled.View`
flex:1;
justify-content:center;
align-items:center;
`
const CardView = styled.View`
width:${Dimensions.get('window').width};
height:${Dimensions.get('window').width};
background-color:#5DB5EB;
border-radius:${Dimensions.get('window').width / 2}
justify-content:center;
align-items:center;
`
const TextView = styled.Text`

`
class NetInfoCheck extends React.Component {
    state = {
        isConnected: ''
    }
    componentDidMount() {
        NetInfo.isConnected.fetch().done((isConnected) => {
            if (isConnected == true) {
                this.setState({ isConnected: "Online" })
            }
            else {
                this.setState({ isConnected: "Offline" })
            }
        });

        NetInfo.isConnected.addEventListener(
            'connectionChange',
            this._handleConnectivityChange

        );
    }
    componentWillUnmount() {
        NetInfo.removeEventListener('connectionChange', this._handleConnectivityChange);
    }
    _handleConnectivityChange = (isConnectionOk) => {
        if (isConnectionOk == true) {
            this.setState({ isConnected: "Online" })
            console.log("Online");
        }
        else {
            this.setState({ isConnected: "Offline" })
            console.log("Offline");
        }
    };
    render() {
        return (
            <MainView>
                <CardView style={{ backgroundColor: this.state.isConnected === 'Online' ? 'green' : 'red' }}>
                    <TextView>{this.state.isConnected}</TextView>
                </CardView>
            </MainView >
        )
    }
}

export default NetInfoCheck
