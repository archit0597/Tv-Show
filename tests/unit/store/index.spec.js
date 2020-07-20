import store from '@/store/index.js';

describe('In store', () => {
  it('test for selectedShow',()=>{
      store.dispatch('changeSelectedShow','Game');
      expect(store.getters.selectedShow).toBe('Game');
  });
})