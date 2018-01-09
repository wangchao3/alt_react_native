import React, {TabBarIOS, View, Text} from 'react-native';
import Index from '../../index/components/index';
import Back from '../../back/components/back';
import Home from '../../home/components/home';
import Products from '../../products/components/index';
import styles from '../styles/tab';

export default React.createClass({
    getInitialState: function() {
        return {
            selectedTab: 'index',
        };
    },
    render: function(){
        const image = {
            borrow: require('../../../assets/images/foot/accout.png'),
            products: require('../../../assets/images/foot/money.png'),
            home: require('../../../assets/images/foot/user.png')
        }
        return (
            <TabBarIOS>
                <TabBarIOS.Item style={styles.pt50}
                    title={'首页'}
                    icon={image.borrow}
                    renderAsOriginal={false}
                    selected={this.state.selectedTab === 'index'}
                    onPress={() => this.onChange('index')}
                    >
                    <Index route={this.props.router} />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title={'投资'}
                    icon={image.products}
                    renderAsOriginal={false}
                    selected={this.state.selectedTab === 'products'}
                    onPress={() => this.onChange('products')}
                    >
                    <Products />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title={'账户'}
                    icon={image.home}
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => this.onChange('home')}
                    >
                    <Home />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    },
    onChange: function(tab){
        this.setState({selectedTab: tab});
    }
})
