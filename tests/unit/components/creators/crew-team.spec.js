import { shallowMount } from '@vue/test-utils';
import CrewTeam from '@/components/creators/CrewTeam.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import {routes} from '@/router/index.js';

describe("In Cast Team Component", () => {
    let crewWrapper;
    let vuetify;
    let router = new VueRouter({ routes });
    beforeEach(() => {
        vuetify = new Vuetify();
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        crewWrapper = shallowMount(CrewTeam, {
            Vue,
            vuetify,
            router,
            propsData:{
                crewDetails:{
                    type: "Executive Producer",
                    person:{
                        name:"David Nutter",
                        url:"http://www.tvmaze.com/people/282/david-nutter",
                        image:{
                            medium:"http://static.tvmaze.com/uploads/images/medium_portrait/182/455179.jpg"
                        }
                    }
                }
            },
            data(){
                return{
                    crew: this.crewDetails,
                }
            },
        });
    });

    afterEach(() => {
        crewWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(crewWrapper.isVueInstance).toBeTruthy();
    });

    it('it renders correct markup',()=>{
        expect(crewWrapper.html()).toContain('<div id="crew">');
    });
});