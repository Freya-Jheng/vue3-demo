import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import WebHome from '../views/WebHome.vue';
import Poster from '../views/Poster.vue';
import AdminLogin from '../views/AdminLogin.vue';
import AdminHome from '../views/AdminHome.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/home/',
      name: 'home',
      component: WebHome,
      children: [
        {
          path: 'news',
          name: 'news',
          component: () => import('../views/News.vue')
        },
        {
          path: 'story',
          name: 'story',
          component: () => import('../views/Story.vue')
        },
        {
          path: 'servant',
          name: 'servant',
          component: () => import('../views/Servant.vue')
        },
        {
          path: 'camp-individual',
          name: 'camp-individual',
          component: () => import('../views/Camp.vue')
        },
        {
          path: 'camp-group',
          name: 'camp-group',
          component: () => import('../views/CampGroup.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/Contact.vue')
        },
        {
          path: 'sponsor',
          name: 'sponsor',
          component: () => import('../views/Sponsor.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutUs.vue')
        },
        {
          path: 'camp-apply',
          name: 'camp-apply',
          component: () => import('../views/CampApply.vue')
        },
        {
          path: 'poster',
          name: 'poster',
          component: Poster,
          children: [
            {
              path: 'all',
              name: 'poster-home',
              component: () => import('../views/PosterList.vue')
            },
            {
              path: 'editing',
              name: 'poster-editing',
              component: () => import('../views/PosterEditing.vue')
            }
          ],
        },
        {
          path: 'videos',
          name: 'videos',
          component: () => import('../views/Videos.vue')
        },
        {
          path: 'courses',
          name: 'courses',
          component: () => import('../views/Courses.vue')
        }
      ]
    },
    // admin
    {
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLogin,
    },
    {
      path: '/admin/home/',
      name: 'admin-home',
      component: AdminHome,
      children: [
        {
          path: 'blog',
          name: 'blog',
          component: () => import('../views/AdminBlog.vue'),
          children: [
            {
              path: '',
              name: 'blog-menu',
              component: () => import('../views/AdminBlogMenu.vue')
            },
            {
              path: 'lists',
              name: 'blog-list',
              component: () => import('../views/AdminBlogList.vue')
            },
            {
              path: 'categories',
              name: 'blog-categories',
              component: () => import('../views/AdminBlogCategory.vue')
            }
          ]
        },
        {
          path: 'news',
          name: 'admin-news',
          component: () => import('../views/AdminNews.vue'),
          children: [
            {
              path: '',
              name: 'news-menu',
              component: () => import('../views/AdminNewsMenu.vue')
            },
            {
              path: 'announce',
              name: 'news-announce',
              component: () => import('../views/AdminNewsAnnounce.vue')
            },
            {
              path: 'management',
              name: 'news-management',
              component: () => import('../views/AdminNewsManagement.vue')
            },
            {
              path: 'categories',
              name: 'news-categories',
              component: () => import('../views/AdminNewsCategory.vue')
            }
          ]
        },
        {
          path: 'camp',
          name: 'admin-camp',
          component: () => import('../views/AdminCamp.vue'),
          children: [
            {
              path: '',
              name: 'camp-menu',
              component: () => import('../views/AdminCampMenu.vue')
            },
            {
              path: 'management',
              name: 'camp-management',
              component: () => import('../views/AdminCampManagement.vue')
            },
            {
              path: 'check',
              name: 'camp-check',
              component: () => import('../views/AdminCampCheck.vue')
            }
          ]
        },
        {
          path: 'cooperate',
          name: 'cooperate',
          component: () => import('../views/AdminCooperate.vue'),
          children: [
            {
              path: 'individual',
              name: 'cooperate-individual',
              component: () => import('../views/AdminIndividualCooperation.vue')
            },
            {
              path: 'team',
              name: 'cooperate-team',
              component: () => import('../views/AdminTeamCooperation.vue')
            },
            {
              path: 'church',
              name: 'cooperate-church',
              component: () => import('../views/AdminChurchCooperation.vue')
            },
          ]
        },
        {
          path: 'account',
          name: 'account',
          component: () => import('../views/AdminAccount.vue'),
          children: [
            {
              path: 'teachers',
              name: 'account-teachers',
              component: () => import('../views/AdminTeacherAccount.vue')
            },
            {
              path: 'owners',
              name: 'account-owners',
              component: () => import('../views/AdminOwnerAccount.vue')
            },
          ]
        },
        {
          path: 'courses',
          name: 'admin-courses',
          component: () => import('../views/AdminCourses.vue')
        },
        {
          path: 'contact',
          name: 'admin-contact',
          component: () => import('../views/AdminContact.vue')
        },
        {
          path: 'contact/individual/:id',
          name: 'admin-individual-contact',
          component: () => import('../views/AdminContactIndividual.vue')
        }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
