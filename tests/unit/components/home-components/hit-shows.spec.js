import { shallowMount } from '@vue/test-utils';
import HitShows from '@/components/home-components/HitShows.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {routes} from '@/router/index.js';


describe("In HitShows Component", () => {
    let hitShowWrapper;
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
        hitShowWrapper = shallowMount(HitShows, {
            Vue,
            router,
            store,
            propsData:{
                list: [
                    {
                        "id":16,
                        "name":"Boy",
                        "language":"English",
                        "genres":["Drama","Crime","Thriller"],
                        "rating":{"average":8.3},
                   },
                   {
                        "id":172,
                        "name":"Boss",
                        "language":"English",
                        "genres":["Drama","Crime","Thriller"],
                        "rating":{"average":9.1},
                    },
                    {
                        "id":69,
                        "name":"Bad",
                        "language":"English",
                        "genres":["Drama","Crime","Thriller"],
                        "rating":{"average":9.3},
                   },
                   {
                        "id":269,
                        "name":"Break",
                        "language":"English",
                        "genres":["Drama","Crime","Thriller"],
                        "rating":{"average":9.0},
                    },
                    {
                        "id":19,
                        "name":"Africa",
                        "language":"English",
                        "genres":["Drama","Crime","Thriller"],
                        "rating":{"average":9.2},
                    },
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
                    showList:[
                        {
                            "id":169,
                            "name":"Breaking Bad",
                            "language":"English",
                            "genres":["Drama","Crime","Thriller"],
                            "rating":{"average":9.4},
                        },
                        {
                            "id":69,
                            "name":"Bad",
                            "language":"English",
                            "genres":["Drama","Crime","Thriller"],
                            "rating":{"average":9.3},
                        },
                        {
                            "id":19,
                            "name":"Africa",
                            "language":"English",
                            "genres":["Drama","Crime","Thriller"],
                            "rating":{"average":9.2},
                        }, 
                        {
                            "id":172,
                            "name":"Boss",
                            "language":"English",
                            "genres":["Drama","Crime","Thriller"],
                            "rating":{"average":9.1},
                        },
                        {
                            "id":269,
                            "name":"Break",
                            "language":"English",
                            "genres":["Drama","Crime","Thriller"],
                            "rating":{"average":9.0},
                        }           
                    ],
                }
            },
        });
    });

    afterEach(() => {
        hitShowWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(hitShowWrapper.isVueInstance).toBeTruthy();
    });

    it("it should call showDetails method which updates the store",()=>{
        hitShowWrapper.vm.showDetails(4);
        expect(actions.changeSelectedShow).toBeCalled();
    });
});