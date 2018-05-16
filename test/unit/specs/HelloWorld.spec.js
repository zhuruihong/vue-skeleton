import Vue from 'vue';
import example1 from '@/components/example1/example1';

describe('example1.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(example1);
    const vm = new Constructor().$mount();
    const h1Arr = vm.$el.querySelectorAll('.hello h1');
    console.log('===================all tag h1===============');
    console.log(h1Arr);
    console.log('===================all tag h1===============');
    expect(h1Arr[0].textContent).to.equal('The building environment is ');
    expect(h1Arr[1].textContent).to.equal('testing.');
    expect(h1Arr[2].textContent).to.equal('This is a Vue.js skeleton.');
    expect(h1Arr[3].textContent).to.equal('You can design something here.');
  });
});
