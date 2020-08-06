import Vue from 'vue'
import { Button, Aside, Dropdown, DropdownMenu, DropdownItem, Header, Main, Table, TableColumn, Container, Menu, Submenu, MenuItem, MenuItemGroup, Form, FormItem, Input, Message } from 'element-ui'

Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}

Vue.use(Button)
Vue.use(Aside)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Header)
Vue.use(Main)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Message)
