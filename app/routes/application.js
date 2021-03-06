//  项目入口route
import Ember from 'ember';

import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';


/**
 * 使用插件类`ApplicationRouteMixin`限制必须经过授权才能访问application这个路由
 * @param  {[type]} ) {		return    this.store.findAll('todo-item');	}} [description]
 * @return {[type]}   [description]
 */
export default Ember.Route.extend(ApplicationRouteMixin, {

	actions: {
        invalidateSession: function() {
            this.get('session').invalidate();
        }
    }
});
