import { shallowMount } from '@vue/test-utils';
import header from '@/components/header/Header.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import {routes} from '@/router/index.js';

describe("In Header Component", () => {
    let headerWrapper;
    let router = new VueRouter({ routes });
    
    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        headerWrapper = shallowMount(header, {
            Vue,
            router,
        });
    });

    afterEach(() => {
        headerWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(headerWrapper.isVueInstance).toBeTruthy();
    });
    it("it should have a <v-app-bar-stub></v-app-bar-stub>", () => {
        expect(headerWrapper.html()).toContain("v-app-bar-stub");
    });
    it('on click to search redirect to search',async() => {
        headerWrapper.vm.search();
    });
});