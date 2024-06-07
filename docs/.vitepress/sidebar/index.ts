import { backendSideBar } from './backend'
import { frontendSideBar } from './frontend'
import { designSideBar } from './design'
import { studySideBar } from './study'
import { operateSideBar } from './operate'

export const sidebar = {
  '/backend/': backendSideBar,
  '/frontend/': frontendSideBar,
  '/design/': designSideBar,
  '/study/': studySideBar,
  '/operate/': operateSideBar,
}