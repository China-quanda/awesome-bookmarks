import { backendSideBar } from './backend'
import { frontendSideBar } from './frontend'
import { designSideBar } from './design'
import { studySideBar } from './study'
import { operateSideBar } from './operate'
import { openSideBar } from './open'
import { toolSideBar } from './tool'

export const sidebar = {
  '/backend/': backendSideBar,
  '/frontend/': frontendSideBar,
  '/design/': designSideBar,
  '/study/': studySideBar,
  '/operate/': operateSideBar,
  '/open/': openSideBar,
  '/tool/': toolSideBar,
}