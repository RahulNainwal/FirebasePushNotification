import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native';
import { Toolbar } from 'react-native-material-ui';


const ButtonScreen = (props) => {
    const tabNavigator = () => {
        props.navigation.navigate('TabNavigator');
    }
    const userExperience = () => {
        props.navigation.navigate('UserExperience');
    }
    const customActivityIndicator = () => {
        props.navigation.navigate('AcitvityIndicatorWithCancel');
    }
    const screenOverlay = () => {
        props.navigation.navigate('ScreenOverlay')
    }
    const archiveOnCloudScreen = () => {
        props.navigation.navigate('ArchiveOnCloudScreen');
    }
    const sectionListExample = () => {
        props.navigation.navigate('SectionListExample');
    }
    const barChart = () => {
        props.navigation.navigate('BarChart');
    }
    const floatingButton = () => {
        props.navigation.navigate('FloatingButton');
    }
    const drawerNavigation = () => {
        props.navigation.navigate('DrawerNavigation');
    }
    const animatedView = () => {
        props.navigation.navigate('AnimatedView');
    }
    const showHideViewOnScroll = () => {
        props.navigation.navigate('ShowHideViewOnScroll');
    }
    const floatingActionButton = () => {
        props.navigation.navigate('FloatingActionButton');
    }
    const reactNativeCollapsible = () => {
        props.navigation.navigate('ReactNativeCollapsible');
    }
    const reactNativeCollapsible1 = () => {
        props.navigation.navigate('ReactNativeCollapsible1');
    }
    const paymentModal = () => {
        props.navigation.navigate('PaymentModal');
    }
    const creditCardInput = () => {
        props.navigation.navigate('CreditCardInput');
    }
    const cardInput = () => {
        props.navigation.navigate('CardInput');
    }
    const sliderScreen = () => {
        props.navigation.navigate('SliderScreen');
    }
    const customeSignInScreen = () => {
        props.navigation.navigate('customeSignInScreen')
    }
    const imageViewComponent = () => {
        props.navigation.navigate('ImageViewComponent')
    }
    const netInfoSubscription = () => {
        props.navigation.navigate('NetInfoSubscription')
    }
    const toolbarWithSearchFeature = () => {
        props.navigation.navigate('ToolbarWithSearchFeature')
    }
    const fastImageLoading = () => {
        props.navigation.navigate('FastImageLoading')
    }
    const toolbarUsingMaterialUI = () => {
        props.navigation.navigate('ToolbarUsingMaterialUI')
    }
    const animationTestStack = () => {
        props.navigation.navigate('AnimationTestStack')
    }
    return (
        <View style={{ flex: 1 }}>
            <Toolbar
                //leftElement="menu"
                centerElement="Searchable"
                rightElement={{
                    man: {
                        icon: "more-vert",
                        labels: ["item 1", "item 2"]
                    }
                }}
                searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                }}

                onRightElementPress={(label) => { console.log(label) }}
            />
            <ScrollView>
                <Button title="Tab Screen" onPress={tabNavigator}></Button>
                <Button title="User Experience" onPress={userExperience}></Button>
                <Button title="Custom Activity Indicator" onPress={customActivityIndicator}></Button>
                <Button title="Screen Overlay" onPress={screenOverlay}></Button>
                <Button title="Archive On Cloud Screen" onPress={archiveOnCloudScreen}></Button>
                <Button title="Section List" onPress={sectionListExample}></Button>
                <Button title="Bar Chart" onPress={barChart}></Button>
                <Button title="Floating Button" onPress={floatingButton}></Button>
                <Button title="Floating Button" onPress={drawerNavigation}></Button>
                <Button title="Animated View" onPress={animatedView}></Button>
                <Button title="Show Hide View On Scroll" onPress={showHideViewOnScroll}></Button>
                <Button title="Floating Action Button" onPress={floatingActionButton}></Button>
                <Button title="React Native Collapsible" onPress={reactNativeCollapsible}></Button>
                <Button title="React Native Collapsible1" onPress={reactNativeCollapsible1}></Button>
                <Button title="Payment Modal" onPress={paymentModal}></Button>
                <Button title="Credit Card Input" onPress={creditCardInput}></Button>
                <Button title="Credit Input" onPress={cardInput}></Button>
                <Button title="Slider Screen" onPress={sliderScreen}></Button>
                <Button title="Custom signin screen" onPress={customeSignInScreen}></Button>
                <Button title="Image View Component" onPress={imageViewComponent}></Button>
                <Button title="Net Info Subscription" onPress={netInfoSubscription}></Button>
                <Button title="Toolbar With Search Feature" onPress={toolbarWithSearchFeature}></Button>
                <Button title="Fast Image Loading" onPress={fastImageLoading}></Button>
                <Button title="Toolbar using Material UI" onPress={toolbarUsingMaterialUI}></Button>
                <Button title="Animation Test" onPress={animationTestStack}></Button>
            </ScrollView>
        </View>
    )
}
export default ButtonScreen;