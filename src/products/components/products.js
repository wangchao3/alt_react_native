import React, {View, ListView, Text, TouchableHighlight} from 'react-native';
// import Product from './product';
import styles from '../styles/products';
import Router from '../../app/actions/router';

export default React.createClass({

    propTypes: {
        products: React.PropTypes.array.isRequired,
    },

    getInitialState: function() {
        products = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })
        return {
            products: products.cloneWithRows(this.props.products),
        };
    },

    componentWillReceiveProps: function(nextProps) {
        if(nextProps.products){
            this.setState({
                products: this.state.products.cloneWithRows(nextProps.products),
            });
        }
    },

    render: function() {
        return (
            <ListView
                dataSource={this.state.products}
                renderRow={this.renderProduct}
                style={styles.container}
                pageSize={10}
            />
        )
    },

    renderProduct: function(product) {
        return (
            <View>
                <TouchableHighlight
                    underlayColor={'#eee'}
                    >
                    <View style={styles.product}>
                        <Text>{product.projectName}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    },

    pushProductDetail: function(productId){
        Router.push({
            title: '项目详情',
            component: Product,
            passProps: {
                id: productId,
            }
        });
    }
})
