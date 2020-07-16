import { shallowMount } from '@vue/test-utils';
import ShowCard from '@/components/home-components/ShowCard.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {routes} from '@/router/index.js';


describe("In ShowCard Component", () => {
    let showCardWrapper;
    let router = new VueRouter({ routes });
    let state;
    let actions;
    let getters;
    let store;
    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        Vue.use(Vuex);
        state = {
            selectedShow: {}
        }
        getters = {
            selectedShow: ()=> state.selectedShow,
        }
        actions = {
            changeSelectedShow: jest.fn(),
        }
        store = new Vuex.Store({
            state,
            actions,
            getters
        });
        showCardWrapper = shallowMount(ShowCard, {
            Vue,
            router,
            store,
            propsData:{
                list: [
                    {
                        "id":169,
                        "name":"Breaking Bad",
                        "language":"English",
                        "genres":["Drama","Crime","Thriller"],
                        "rating":{"average":9.4},
                    }                
                ]
            },
            data(){
                return{
                    currentShow : [],
                }
            },
        });
    });

    afterEach(() => {
        showCardWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(showCardWrapper.isVueInstance).toBeTruthy();
    });

    it("it should call showDetails method which updates the store",()=>{
        showCardWrapper.vm.showDetails(4);
        expect(actions.changeSelectedShow).toBeCalled();
    });
});