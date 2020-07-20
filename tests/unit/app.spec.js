import { shallowMount } from '@vue/test-utils'
import app from '@/App.vue';
import AppHome from '@/views/Home.vue';
import AppHeader from '@/components/header/Header.vue';
import AppFooter from '@/components/footer/Footer.vue';
import Vue from "vue";
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import {routes} from '@/router/index.js';

describe('In App.vue', () => {
  let appWrapper;
  const router = new VueRouter({ routes });
  
  beforeEach(()=>{
    Vue.use(Vuetify);
    Vue.use(VueRouter);
    appWrapper = shallowMount(app,{
      Vue,
      router
    });
  });
  afterEach(()=>{
    appWrapper.destroy();
  });

  it('is a Vue instance',()=>{
    expect(appWrapper.isVueInstance).toBeTruthy();
  });

  it('it should have v-app-stub',()=>{
    expect(appWrapper.html()).toContain('v-app');
  });
  
  describe("it should load Header component", () => {
    it('it should load header',()=>{
      expect(AppHeader).toBeTruthy();
    });
    it('it should have a <header-stub></header-stub>', () => {
      expect(appWrapper.html()).toContain('<app-header-stub></app-header-stub>');
    });
  });

  describe("it should render router view", () => {
    it('it should have v-main"', () => {
      expect(appWrapper.html()).toContain("v-main");
    });
    it("it should load the Home view by default", () => {
      expect(AppHome).toBeTruthy();
    });
  });

  describe("it should load Footer component", () => {
    it('it should load footer',()=>{
      expect(AppFooter).toBeTruthy();
    });
    it('it should have a <footer-stub></footer-stub>', () => {
      expect(appWrapper.html()).toContain('<app-footer-stub></app-footer-stub>');
    });
  });
});
