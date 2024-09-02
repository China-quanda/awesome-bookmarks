import { backendSideBar } from './backend'
import { frontendSideBar } from './frontend'
import { studySideBar } from './study'
import { toolSideBar } from './tool'
import { articleSideBar } from './article'
import { navigationSideBar } from './navigation'

export const sidebar = {
  '/backend/': backendSideBar,
  '/frontend/': frontendSideBar,
  '/tool/': toolSideBar,
  '/article/': articleSideBar,
  '/navigation/': navigationSideBar,
}