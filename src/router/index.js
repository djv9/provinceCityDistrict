import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import addressSelect from '@/components/addressSelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'addressSelect',
      component: addressSelect
    }
  ]
})
