import { shallowMount } from '@vue/test-utils';
import CastTeam from '@/components/creators/CastTeam.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import {routes} from '@/router/index.js';

describe("In Cast Team Component", () => {
    let castWrapper;
    let vuetify;
    let router = new VueRouter({ routes });
    beforeEach(() => {
        vuetify = new Vuetify();
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        castWrapper = shallowMount(CastTeam, {
            Vue,
            vuetify,
            router,
            propsData:{
                castDetails:[{
                    person:{
                        name:"Stephen Amell",
                        url:"http://www.tvmaze.com/people/271/stephen-amell",
                        image:{
                            medium:"http://static.tvmaze.com/uploads/images/medium_portrait/0/44.jpg"
                        }
                    },
                    character:{
                        name: "Black Knight"
                    }
                }]
            },
            data(){
                return{
                    cast: this.castDetails
                }
            },
        });
    });

    afterEach(() => {
        castWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(castWrapper.isVueInstance).toBeTruthy();
    });

    it('it renders correct markup',()=>{
        expect(castWrapper.html()).toContain('<div id="cast">');
    });
});