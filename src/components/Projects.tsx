import { type ListOfProjects } from '../types'
import { Project } from './Project'

interface Props {
  projects: ListOfProjects
}

export const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
      <li
        key={project.id}
        className={'project'}>
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          stack={project.stack}
          />
      </li>
      )
      )}
    </ul>
  )
}
