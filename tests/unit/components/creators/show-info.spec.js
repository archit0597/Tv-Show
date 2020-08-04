import { shallowMount } from '@vue/test-utils';
import AppCastTeam from '@/components/creators/CastTeam.vue';
import AppCrewTeam from '@/components/creators/CrewTeam.vue';
import ShowInfo from '@/components/creators/ShowInfo.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import {routes} from '@/router/index.js';
import { getShowById } from '@/services/service.js';
import axios from 'axios';

jest.mock('axios');

describe("In ShowInfo Component", () => {
    let showInfoWrapper;
    let router = new VueRouter({ routes });
    let vuetify;
    beforeEach(() => {
        vuetify = new Vuetify();
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        showInfoWrapper = shallowMount(ShowInfo, {
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
                }
            },
        });
    });

    afterEach(() => {
        jest.resetAllMocks();
        showInfoWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(showInfoWrapper.isVueInstance).toBeTruthy();
    });

    it('it renders correct markup',()=>{
        expect(showInfoWrapper.html()).toContain('<div id="prodTeam">');
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

    it('should return shows on api', async () => {
       const mockedShows = [{ shows: 1 }];
       axios.get = jest.fn().mockResolvedValue(mockedShows);
       const actualValue = await getShowById(['1']);
       expect(actualValue).toEqual(mockedShows);
    });

    it('check the getData method',()=>{
        let shows = 
        {
            "id":4,
            "name":"Arrow",
            "language":"English",
            "genres":["Drama","Action","Science Fiction"],
            "rating":{"average":7.4},
            "image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg"},
            "summary":"<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>",
            "_embedded":{
                "crew":"crew",
                "cast":"cast",
                "seasons":"season",
                "episodes":"episodes"
            }
        }
        showInfoWrapper.setData({ productionTeam: shows });
        showInfoWrapper.vm.getData();
    });
});