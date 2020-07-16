import { shallowMount } from '@vue/test-utils';
import AboutCard from '@/views/About.vue';
import AppProductionTeam from '@/components/creators/ProductionTeam.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {routes} from '@/router/index.js';


describe("In About View", () => {
    let aboutShowWrapper;
    let router = new VueRouter({ routes });
    let state;
    let actions;
    let getters;
    let store;
    let vuetify;
    beforeEach(() => {
        vuetify = new Vuetify();
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
        aboutShowWrapper = shallowMount(AboutCard, {
            Vue,
            router,
            store,
            vuetify,
            data(){
                return{
                    selectedShow : [
                        {
                            "id":169,
                            "name":"Breaking Bad",
                            "language":"English",
                            "genres":["Drama","Crime","Thriller"],
                            "rating":{"average":9.4},
                        }   
                    ],
                }
            },
        });
    });

    afterEach(() => {
        aboutShowWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(aboutShowWrapper.isVueInstance).toBeTruthy();
    });
});