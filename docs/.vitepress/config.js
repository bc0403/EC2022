import mathjax3 from 'markdown-it-mathjax3';

const customElements = ['mjx-container'];

export default {
  title: 'Fundamentals of Electronic Circuits',
  description: 'course material',
  base: '/EC2022',

  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
};
