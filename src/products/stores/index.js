import alt from '../../alt';
import IndexActions from '../actions/index';
import url from '../constants/url';
import {filters} from '../constants/index'

class IndexStore {
    constructor() {
        this.loaded = false;
        this.products = [];
        this.selectedIndex = 0;
        this.fetchListUrl = '散标投资';
        this.bindActions(IndexActions);
    }

    onFetch() {
        const filter = filters.value[this.selectedIndex];
        console.log(filter);
        if (filter == '散标投资') {
            this.fetchListUrl = url.product_list;
        }else if (filter == '灵汇金') {
            this.fetchListUrl = url.product_list1;
        }else {
            this.fetchListUrl = url.product_list2;
        }
        fetch(this.fetchListUrl)
        .then((response) => response.json())
        .then((responseData) => {
            if (filter == '债权转让') {
                this.products = responseData.content.assignmentList;
                for(let idx in this.products) {
                    this.products[idx].projectName = this.products[idx].assignmentName;
                }
            }else {
                this.products = responseData.content.array;
            }
            this.loaded = true;
            this.emitChange();
        })
    }

    onSetFilter(index) {
        if(this.selectedIndex === index) return false;
        this.selectedIndex = index;
        this.onFetch();
    }
}

export default alt.createStore(IndexStore, 'IndexStore');
