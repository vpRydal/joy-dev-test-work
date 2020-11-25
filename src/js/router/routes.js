export default [
    {
        path: '/',
        name: 'step1',
        component: () => import('../views/Step1.vue')
    },
    {
        path: '/step-2',
        name: 'step2',
        component: () => import('../views/Step2.vue')
    }
]