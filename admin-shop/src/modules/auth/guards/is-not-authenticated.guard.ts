import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';
import { AuthStatus } from '../interfaces';

const isNotAuthenticatedGuard = async (
  to: RouteLocationNormalized, // a donde va 
  from: RouteLocationNormalized, //de donde viene
  next: NavigationGuardNext, //la funcion que se va a ejcutar?
) => {

  const authStore = useAuthStore();
 
  await authStore.checkAuthStatus();


  (authStore.authStatus === AuthStatus.Authenticated)
  ? next({ name: 'home'})
  : next()


  // const userId = localStorage.getItem('userId');
  // localStorage.setItem('lastPath', to.path);

  // if (!userId) {
  //   return next({
  //     name: 'login',
  //   });
  // }

  //return next();
};

export default isNotAuthenticatedGuard;
