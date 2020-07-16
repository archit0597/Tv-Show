import { shallowMount } from '@vue/test-utils';
import AppCastTeam from '@/components/creators/CastTeam.vue';
import AppCrewTeam from '@/components/creators/CrewTeam.vue';
import ProductionTeam from '@/components/creators/ProductionTeam.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import {routes} from '@/router/index.js';
import { getShowById } from '@/services/service.js';

describe("In Production Team Component", () => {
    let prodWrapper;
    let router = new VueRouter({ routes });
    let vuetify;
    beforeEach(() => {
        vuetify = new Vuetify();
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        prodWrapper = shallowMount(ProductionTeam, {
            Vue,
            router,
            vuetify,
            propsData:{
                id:4
            },
            data(){
                return{
                    showId: 4,
                    productionTeam: {},
                    slide: null,
                    crew: [],
                    cast: [],
                    crewSheet: false,
                    castSheet: false
                }
            },
        });
    });

    afterEach(() => {
        prodWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(prodWrapper.isVueInstance).toBeTruthy();
    });

    it('it renders correct markup',()=>{
        expect(prodWrapper.html()).toContain('<div id="prodTeam">');
    });

    describe("it should load CrewTeam component", () => {
        it('it should load CrewTeam',()=>{
          expect(AppCrewTeam).toBeTruthy();
        });
    });

    describe("it should load CastTeam component", () => {
        it('it should load CastTeam',()=>{
          expect(AppCastTeam).toBeTruthy();
        });
    });

    it("getShowById api should fetch the data",async()=>{
        let response = await getShowById(4);
        expect(response.data.id).toBe(4);
    });

    it("getShowById api should fetch the data",async()=>{
        let response = await getShowById(4);
        expect(response.data.id).toBe(4);
    });
});