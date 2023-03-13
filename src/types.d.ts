import React = require('react')
export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
}

export type ProjectId = Pick<Project, 'id'>
// export type ProjectId = Omit<Project, 'title' | 'description' | 'stack'>
export type ProjectTitle = Pick<Project, 'title'>
export type ProjectDescription = Pick<Project, 'description'>
export type ProjectStack = Pick<Project, 'stack'>

export type ListOfProjects = Project[]

export const ReactComponent: React.FC<React.SVGProps<SVGSVCElement>>
const src: string
export default src
