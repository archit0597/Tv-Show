import { shallowMount } from '@vue/test-utils';
import Episodes from '@/components/creators/Episodes.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import {routes} from '@/router/index.js';

describe("In Episodes Component", () => {
    let showWrapper;
    let router = new VueRouter({ routes });
    let vuetify;
    beforeEach(() => {
        vuetify = new Vuetify();
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        showWrapper = shallowMount(Episodes, {
            Vue,
            router,
            vuetify,
            propsData:{
                episodes:{},
                seasons:{}
            },
            data(){
                return{
                    episode: this.episodes,
                    season: this.seasons,
                    seasonWiseList: []
                }
            },
        });
    });

    afterEach(() => {
        showWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(showWrapper.isVueInstance).toBeTruthy();
    });

    it("it should call method getEpisode for each season and filter episodes",()=>{
       showWrapper.setData({episode:[{
            "id": 2307,
            "url": "http://www.tvmaze.com/episodes/2307/ncis-2x01-see-no-evil",
            "name": "See No Evil",
            "season": 2,
            "number": 1,
            "airdate": "2004-09-28",
            "airtime": "20:00",
            "airstamp": "2004-09-29T00:00:00+00:00",
            "runtime": 60,
        }]
    });
        showWrapper.vm.getEpisode(2);
        expect(showWrapper.vm.seasonWiseList.length).toBe(1);
    });

    it("it should call method getEpisode for each season and filter episodes",()=>{
        showWrapper.setData({episode:[{
             "id": 2307,
             "url": "http://www.tvmaze.com/episodes/2307/ncis-2x01-see-no-evil",
             "name": "See No Evil",
             "season": 2,
             "number": 1,
             "airdate": "2004-09-28",
             "airtime": "20:00",
             "airstamp": "2004-09-29T00:00:00+00:00",
             "runtime": 60,
         }]
     });
         showWrapper.vm.getEpisode(1);
         expect(showWrapper.vm.seasonWiseList.length).toBe(0);
     });
});