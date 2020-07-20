import { shallowMount } from '@vue/test-utils';
import AppShowCard from '@/components/home-components/ShowCard.vue';
import Slider from '@/components/home-components/Slider.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import {routes} from '@/router/index.js';

describe("In Slider Component", () => {
    let sliderWrapper;
    let router = new VueRouter({ routes });
    let vuetify;
    beforeEach(() => {
        vuetify = new Vuetify();
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        sliderWrapper = shallowMount(Slider, {
            Vue,
            router,
            vuetify,
            propsData:{
                genre: 'Drama',
                list:[
                    {
                        "id":169,
                        "name":"Breaking Bad",
                        "language":"English",
                        "genres":["Drama","Crime","Thriller"],
                        "rating":{"average":9.3},
                        "image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"},
                        "summary":"<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>"
                    },
                    {
                        "id":4,
                        "name":"Arrow",
                        "language":"English",
                        "genres":["Drama","Action","Science Fiction"],
                        "rating":{"average":7.4},
                        "image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg"},
                        "summary":"<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>"
                    },
                    {
                        "id": 249,
                        "name": "Sherlock",
                        "rating":{"average":9.5},
                        "genres":["Thriller","Crime"]
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
                            "rating":{"average":9.3},
                            "image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"},
                            "summary":"<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>"
                        },
                        {
                            "id":4,
                            "name":"Arrow",
                            "language":"English",
                            "genres":["Drama","Action","Science Fiction"],
                            "rating":{"average":7.4},
                            "image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg"},
                            "summary":"<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>"
                        },
                        {
                            "id": 249,
                            "name": "Sherlock",
                            "rating":{"average":9.5},
                            "genres":["Thriller","Crime"]
                        }
                    ],
                    showGenre: 'Drama',
                    genreWiseList: [],
                    slide: null
                }
            },
        });
    });

    afterEach(() => {
        sliderWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(sliderWrapper.isVueInstance).toBeTruthy();
    });

    it('it renders correct markup',()=>{
        expect(sliderWrapper.html()).toContain('<div id="slider">');
    });

    describe("it should load ShowCard component", () => {
        it('it should load ShowCard',()=>{
          expect(AppShowCard).toBeTruthy();
        });
        it('it should have a <app-show-card-stub></app-show-card-stub>', () => {
          expect(sliderWrapper.html()).toContain('app-show-card-stub');
        });
    });
});