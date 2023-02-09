import { createRouter, createWebHistory } from 'vue-router'

import PairingView from '../views/Pairing/PairingView.vue'
import PairingView2 from '../views/Pairing/PairingView2.vue'
import PairingView3 from '../views/Pairing/PairingView3.vue'
import PairingFailedView from '../views/Pairing/PairingFailedView.vue'

import HomeView from '../views/Home/HomeView.vue'

import TicketView from '../views/Ticket/TicketView.vue'
import InputView from '../views/Ticket/InputView.vue'
import InputConfirmView from '../views/Ticket/InputConfirmView.vue'
import InputTransferView from '../views/Ticket/InputTransferView.vue'
import InputTransferCompletedView from '../views/Ticket/InputTransferCompletedView.vue'

import SkinView from '../views/Skin/SkinView.vue'

import EffectView from '../views/Effect/EffectView.vue'

import SettingView from '../views/Setting/SettingView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // Pairing
    {
      path: '/',              // 첫 화면을 페어링 여부 검사 화면으로 한다. 
      name: 'root',           // 만악 페어링 되어 있는 상태면 '/home'으로 리다이렉트 시킨다.
      component: PairingView  // 펄싱하는 파란링은 보여주며 응원봉 버튼 누름을 유도한다.
    },
    {
      path: '/pairing',       // 페어링 시도를 위한 첫 화면
      name: 'pairing',        // '/'와 같은 화면/코드
      component: PairingView
    },
    {
      path: '/pairing2',      // 페어링 시도하는 동안 무지개링을 보여주며 대기한다. 
      name: 'pairing2',       // 1분 대기 후 응답없을 경우 '/pairingfailed'로 리다이렉트 시킨다.
      component: PairingView2 // 페어링이 성공하면, 'pairing3'로 리다이렉트 한다.
    },
    {
      path: '/pairing3',      // 페어링 성공 후 확인하는 화면으로 R, G, B 색의 링을 보여준다.
      name: 'pairing3',       // 다시 시도하기를 원할 경우 BLE 연결을 끊고 '/pairing'으로 이동한다.
      component: PairingView3 // 연결 성공을 확인할 경우 '/home'으로 리다이렉트 한다.
    },
    {
      path: '/pairingfailed',
      name: 'pairingfailed',
      component: PairingFailedView
    },


    // Home
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },

    // Ticket
    {
      path: '/ticket',
      name: 'ticket',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/Ticket/TicketView.vue')
      component: TicketView
    },
    {
      path: '/input',
      name: 'input',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/Ticket/TicketView.vue')
      component: InputView
    },
    {
      path: '/input/:id',
      name: 'inputWithId',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/Ticket/TicketView.vue')
      component: InputView
    },
    {
      path: '/inputconfirm/:id',
      name: 'inputConfirmWithId',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/Ticket/TicketView.vue')
      component: InputConfirmView
    },
    {
      path: '/inputtransfer/:id',
      name: 'inputTransferWithId',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/Ticket/TicketView.vue')
      component: InputTransferView
    },
    {
      path: '/inputtransfercompleted/:id',
      name: 'inputTransferCompletedWithId',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/Ticket/TicketView.vue')
      component: InputTransferCompletedView
    },

    // Effect
    {
      path: '/effect',
      name: 'effect',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/Ticket/TicketView.vue')
      component: EffectView
    },

    // Skin
    {
      path: '/skin',
      name: 'skin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/Ticket/TicketView.vue')
      component: SkinView
    },

    // Setting
    {
      path: '/setting',
      name: 'setting',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/Ticket/TicketView.vue')
      component: SettingView
    }
  ]
})

export default router
