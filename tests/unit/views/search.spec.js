import { shallowMount } from '@vue/test-utils';
import AppShowCard from '@/components/home-components/ShowCard.vue';
import Search from '@/views/Search.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import {routes} from '@/router/index.js';
import { getShowsByName } from '@/services/service.js';

describe("In Search Component", () => {
    let searchWrapper;
    let router = new VueRouter({ routes });
    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        searchWrapper = shallowMount(Search, {
            Vue,
            router,
            data(){
                return{
                    searchQuery: '',
                    searchResults: [],
                    searchTrigger: false
                }
            },
        });
    });

    
    afterEach(() => {
        searchWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(searchWrapper.isVueInstance).toBeTruthy();
    });

    it('it renders correct markup',()=>{
        expect(searchWrapper.html()).toContain('<div class="search">');
    });

    it('it renders <v-container></v-container>',()=>{
        expect(searchWrapper.html()).toContain('v-container-stub');
    });

    describe("it should load ShowCard component", () => {
        it('it should load ShowCard',()=>{
          expect(AppShowCard).toBeTruthy();
        });
    });

    it("it should call searchShow method as it detects any search input",()=>{
        searchWrapper.setData({ searchQuery: 'Game' });
        searchWrapper.vm.searchShow();
        expect(searchWrapper.vm.searchTrigger).toBe(true);
        
    });

    it("it should check searchShow response when searchQuery is empty",()=>{
        searchWrapper.setData({ searchQuery: 'Game' });
        searchWrapper.vm.searchShow();
        searchWrapper.setData({ searchQuery: '' });
        searchWrapper.vm.searchShow();
        expect(searchWrapper.vm.searchTrigger).toBe(false);
        
    });

    it("check api response when searchQuery is valid",async()=>{
        searchWrapper.setData({ searchQuery: 'Game' });
        let response = await getShowsByName(searchWrapper.vm.searchQuery);
        expect(response.data.length).toBeGreaterThan(0);    
    });

    it("check api response when searchQuery is invalid",async()=>{
        searchWrapper.setData({ searchQuery: '1x5r3' });
        let response = await getShowsByName(searchWrapper.vm.searchQuery);
        expect(response.data.length).toBe(0); 
        expect(searchWrapper.vm.searchTrigger).toBe(false);    
    });
});