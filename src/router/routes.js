/* vue */
import Vue from 'vue';
import VueRouter from 'vue-router';

/* components */
import Main from '@/components/application/Main';
import Boards from '@/components/application/Boards';
import Login from '@/components/application/Login'
import Singup from '@/components/application/Singup'
import NotFound from "@/components/error/NotFound";
import BoardsDetail from "@/components/application/BoardsDetail";
import BoardsWrite from "@/components/application/BoardsWrite";
import BoardsModify from "@/components/application/BoardsModify";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes : [
        { name: 'login', path: '/login', component: Login},
        { name: 'signup', path: '/signup', component: Singup },
        { name: 'boardswrite', path: '/boards/write', component: BoardsWrite},
        { name: 'boardsDetail', path: '/boards/:bbsSeq', component: BoardsDetail},
        { name: 'boards', path: '/boards', component: Boards},
        { name: 'modify', path: '/boards/modify/:bbsSeq', component: BoardsModify},
        { name: 'main', path: '/', component: Main},
        { name: 'notFound', path: '*', component: NotFound }
    ]
});

export default router;